import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens/closes
  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
    setIsLogin(true);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isLogin ? "/api/users/login" : "/api/users/register";
    const url = `http://localhost:5000${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...(isLogin ? {} : { name }),
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log(`${isLogin ? "Login" : "Sign up"} successful:`, data);

      // Store user data on success
      if (isLogin) {
        localStorage.setItem(
          "currentUserName",
          data.user.name || data.user.email.split("@")[0]
        );
        window.location.reload(); // Refresh to update header state
      } else {
        // Auto login after signup or ask to login? For now, let's switch to login view or auto-login
        setIsLogin(true);
        setError("Account created! Please log in.");
        setLoading(false);
        return;
      }

      handleClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      if (isLogin) {
        // Only stop loading if we didn't return early above
        setLoading(false);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {isLogin ? "Customer Login" : "Create Account"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isLogin
              ? "Enter your credentials to access your account."
              : "Enter your details to create a new account."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="customers"
            className="w-full mt-2"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
          </Button>

          <div className="text-center text-sm mt-2">
            <span className="text-gray-500">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-primary font-bold hover:underline focus:outline-none"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
