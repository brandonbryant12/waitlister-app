import type { NextApiRequest, NextApiResponse } from 'next';

// This utility function will help encode the file content to Base64
function base64encode(content: string): string {
  return Buffer.from(content).toString('base64');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const githubToken = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const path = 'waitlist-emails.csv';
    const headers = {
      'Authorization': `token ${githubToken}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    };

    try {
      const getFileResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        { headers }
      );
      const fileData = await getFileResponse.json();

      const contentDecoded = Buffer.from(fileData.content, 'base64').toString('utf-8');
      const newContent = `${contentDecoded},${email}`;

      const updateFileResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            message: 'Update waitlist',
            content: base64encode(newContent),
            sha: fileData.sha, // The blob SHA of the file being replaced
          }),
        }
      );

      // Step 4: Handle the response from the GitHub API
      if (updateFileResponse.ok) {
        res.status(200).json({ message: 'Email added to waitlist' });
      } else {
        res.status(500).json({ message: 'Error updating the waitlist' });
      }
    } catch (error) {
      // Handle any errors that occurred during the process
      console.error('Error adding email to waitlist:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
