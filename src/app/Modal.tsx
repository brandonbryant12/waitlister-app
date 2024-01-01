export default function Component() {
    // Assuming your environment variable is named NEXT_PUBLIC_X_PROFILE_URL
    const profileUrl = process.env.NEXT_PUBLIC_X_PROFILE_URL;
  
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div aria-hidden="true" className="absolute inset-0 bg-black opacity-50" />
          <div className="relative bg-white rounded-lg max-w-sm mx-auto p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Thank you for joining the waitlist!</h2>
              <div className="mb-4">
                <p className="text-gray-500 mb-2">For more updates:</p>
                <a
                  href={profileUrl}
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  