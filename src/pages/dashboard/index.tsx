import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Dashboard() {
  return (
    <div
      className={`flex gap-4 pt-4 text-white justify-between items-center shrink-0`}>
        <div>
            <SignedOut>
            <SignInButton mode="modal">
            <button className="rounded border border-gray-400 px-3 py-0.5">
                Sign in
            </button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
  </div>
  );
}