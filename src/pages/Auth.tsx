import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login/cadastro
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header com onda */}
        <div className="relative bg-secondary/30 rounded-t-3xl pt-12 pb-8 px-6 text-center">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-primary" 
               style={{
                 clipPath: "ellipse(60% 100% at 50% 100%)"
               }}
          />
          <h1 className="text-2xl font-bold text-primary relative z-10" 
              style={{ fontFamily: 'serif' }}>
            SEJA BEM-VINDO<br/>A MAPROL
          </h1>
        </div>

        {/* Form */}
        <div className="bg-primary rounded-b-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-primary-foreground text-sm mb-2">
                Nome:
              </label>
              <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-transparent border-0 border-b-2 border-primary-foreground/50 rounded-none text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0 focus-visible:border-primary-foreground px-0"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-primary-foreground text-sm mb-2">
                  Email:
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 border-b-2 border-primary-foreground/50 rounded-none text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0 focus-visible:border-primary-foreground px-0"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-primary-foreground text-sm mb-2">
                Senha:
              </label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="bg-transparent border-0 border-b-2 border-primary-foreground/50 rounded-none text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0 focus-visible:border-primary-foreground px-0"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-primary-foreground text-sm mb-2">
                  Confirmar senha:
                </label>
                <Input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className="bg-transparent border-0 border-b-2 border-primary-foreground/50 rounded-none text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0 focus-visible:border-primary-foreground px-0"
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-primary rounded-full py-6 text-base font-semibold"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </Button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-primary-foreground text-sm hover:underline"
            >
              {isLogin 
                ? "Não tenho conta. Me cadastrar" 
                : "Já tenho conta. Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
