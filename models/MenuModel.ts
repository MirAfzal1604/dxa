import {GeneralHelper} from "~/helpers/GeneralHelper";

export class MenuModel {
    public token: string;

    constructor(
        public icon: string,
        public label: string,
        public url: string = "#",
        public subMenus?: MenuModel[],
    ) {
        this.token = GeneralHelper.getRandomString()
    }
}