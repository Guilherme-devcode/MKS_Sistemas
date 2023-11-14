import { render } from "@testing-library/react";
import Footer from "../footer";

describe("Footer Component", () => {
  it("renders Footer correctly", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText("MKS Sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
