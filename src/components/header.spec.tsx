import { render, screen, fireEvent } from "@testing-library/react";
import { SiteHeader } from "./header";
import "@testing-library/jest-dom";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

jest.mock("lucide-react", () => ({
  Menu: () => <svg data-testid="icon-menu" />,
  X: () => <svg data-testid="icon-x" />,
  ShoppingCart: () => <svg data-testid="icon-cart" />,
}));

jest.mock("@/context/auth-context", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@/context/cart-context", () => ({
  useCart: jest.fn(),
}));

describe("SiteHeader Component", () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      user: {
        id: 1,
        name: "Leo",
        email: "leo@teste.com",
      },
    });
    (useCart as jest.Mock).mockReturnValue({
      items: [
        {
          eventId: 1,
          ticketType: "vip",
          quantity: 1,
          price: 20,
        },
      ],
    });
  });

  it('should render the title "ILOTTO EVENTOS"', () => {
    render(<SiteHeader />);
    expect(screen.getByText("ILOTTO EVENTOS")).toBeInTheDocument();
  });

  it('should show "Entrar / Cadastre-se" when user is not logged in', () => {
    (useAuth as jest.Mock).mockReturnValue({ user: null });

    render(<SiteHeader />);
    expect(screen.getByText("Entrar / Cadastre-se")).toBeInTheDocument();
  });

  it('should show "Olá, Leo" when user is logged in', () => {
    render(<SiteHeader />);
    expect(screen.getByText("Olá, Leo")).toBeInTheDocument();
  });

  it("should show cart quantity when there are items in the cart", () => {
    render(<SiteHeader />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should open and close the mobile menu when clicking the button", () => {
    render(<SiteHeader />);
    const toggleButton = screen.getByRole("button");

    let mobileMenuLinks = screen
      .queryAllByText(/Entrar \/ Cadastre-se|Olá, Leo/i)
      .find((el) => el.closest("div")?.classList.contains("md:hidden"));
    expect(mobileMenuLinks).toBeUndefined();

    fireEvent.click(toggleButton);
    mobileMenuLinks = screen
      .queryAllByText(/Entrar \/ Cadastre-se|Olá, Leo/i)
      .find((el) => el.closest("div")?.classList.contains("md:hidden"));
    expect(mobileMenuLinks).toBeInTheDocument();

    fireEvent.click(toggleButton);
    mobileMenuLinks = screen
      .queryAllByText(/Entrar \/ Cadastre-se|Olá, Leo/i)
      .find((el) => el.closest("div")?.classList.contains("md-hidden"));
    expect(mobileMenuLinks).toBeUndefined();
  });

  it("should render the cart link correctly", () => {
    render(<SiteHeader />);
    expect(screen.getByTestId("icon-cart")).toBeInTheDocument();
  });
});
