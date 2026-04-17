import { useState, FormEvent } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ADMIN_PASSWORD = "satgoadmin";
const STORAGE_KEY = "satgo_admin_authed";

export const isAuthed = () => sessionStorage.getItem(STORAGE_KEY) === "1";

export const AdminGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      onUnlock();
    } else {
      setError("Incorrect password");
      setPwd("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 space-y-6"
      >
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
            <Lock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter password to manage transactions
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pwd">Password</Label>
          <Input
            id="pwd"
            type="password"
            autoFocus
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
              setError("");
            }}
            placeholder="••••••••••"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <Button type="submit" className="w-full" size="lg">
          Unlock
        </Button>
      </form>
    </div>
  );
};
