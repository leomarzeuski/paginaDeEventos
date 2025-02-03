import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Newsletter() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 bg-blue-600 flex flex-col items-center justify-center p-8 text-white">
        <div className="max-w-xl w-full space-y-6 text-center">
          <h2 className="text-2xl font-semibold">
            Inscreva-se para saber as novidades
          </h2>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="w-full bg-white text-black"
            />
            <div className="flex items-start space-x-2 text-sm">
              <Checkbox id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-left">
                Clique aqui se você não deseja receber outras comunicações. Você
                pode ler nossos e-mails e alterações em nossa política de
                privacidade a qualquer momento.
              </label>
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white w-32">
              INSCREVA-SE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
