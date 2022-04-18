import { render, fireEvent, screen, act } from "@testing-library/react";
import DeviceButton from "./DeviceButton";
import App from "../App"

describe("Device Button Component", () => {
    it("button is rendered", () => {
        render(<DeviceButton />);
        const button = screen.getByTestId("deviceButton");
        expect(button).toBeTruthy();
    })

    it("button click returns id", () => {
        const mock = jest.fn(id => id);
        render(<DeviceButton id={5} setActiveId={mock}/>);
        const button = screen.getByTestId("deviceButton");
        fireEvent.click(button)
        expect(mock).toHaveReturnedWith(5);
    })
})