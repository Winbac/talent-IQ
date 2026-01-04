import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.error("This is good")}
      >
        Click Me
      </button>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignedOut></SignedOut>
      </SignedIn>

      <UserButton />
    </div>
  );
}

export default HomePage;
