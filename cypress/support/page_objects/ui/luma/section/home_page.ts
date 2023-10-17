import { BasePage } from "support/general_utilities/ui/luma/base_page";

export class HomePage extends BasePage {

   private  _headerEnum = this.Header;

    // constructor(private _headerEnum?: WebElementsResourcesEnum){
    //     super();
    //     _headerEnum = this.Header;
    // };

    public get header() {
        return this._headerEnum;
    }

};

export default new HomePage();