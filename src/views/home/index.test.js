 import {Home} from ".";
import {render, screen} from "@testing-library/react"

 describe("Home Component", () => {
     test("deve iniciar com o campo vazio", () => {
         render(<Home/>);

         const field = screen.getByText("Formato: NNNNNNN-DD.AAAA.J.TR.OOOO" );
         expect(field).toBeInTheDocument();
     });
 });