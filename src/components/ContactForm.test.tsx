import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

afterEach(() => {
  cleanup();
});

describe("ContactForm", () => {
  it("shows errors when submitted empty", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("aria-invalid", "true");
  });

  it("confirms a valid submission", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/full name/i), "Ana");
    await userEvent.type(screen.getByLabelText(/email/i), "ana@example.com");
    await userEvent.type(screen.getByLabelText(/your question/i), "Hello");
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
  });
});