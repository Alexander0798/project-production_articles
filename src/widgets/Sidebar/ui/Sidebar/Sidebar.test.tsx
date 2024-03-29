import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
    test("render Sidebar component", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Sidebar toggle", () => {
        componentRender(<Sidebar />);
        const ButtonToggle = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(ButtonToggle);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    });
});
 