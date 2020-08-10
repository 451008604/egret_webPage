class OrderFromItem extends eui.ItemRenderer {
    public exml_shiJian: eui.Label;
    public exml_tip: eui.Button;
    public exml_biaoTi: eui.Label;
    public exml_beiZhu: eui.Label;
    public exml_yueDuCiShu: eui.Label;

    private mdoe: OrderFromItemData;

    constructor() {
        super();
        this.skinName = "OrderFromItemSkin";
    }

    dataChanged() {
        super.dataChanged();

        this.mdoe = this.data;

        this.exml_shiJian.text = "" + this.mdoe.exml_shiJian;
        this.exml_tip.label = "" + this.mdoe.exml_tip;
        this.exml_biaoTi.text = "" + this.mdoe.exml_biaoTi;
        this.exml_beiZhu.text = "" + this.mdoe.exml_beiZhu;
        this.exml_yueDuCiShu.text = "" + this.mdoe.exml_yueDuCiShu;
    }
}