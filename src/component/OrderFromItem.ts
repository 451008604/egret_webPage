class OrderFromItem extends eui.ItemRenderer {
    public exml_shiJian: eui.Label;
    public exml_tip: eui.Button;
    public exml_biaoTi: eui.Label;
    public exml_beiZhu: eui.Label;
    public exml_yueDuCiShu: eui.Label;

    private model: OrderFromItemData;

    constructor() {
        super();
        this.skinName = "OrderFromItemSkin";
    }

    dataChanged() {
        super.dataChanged();

        this.model = this.data;

        this.exml_shiJian.text = "" + this.model.exml_shiJian;
        this.exml_tip.label = "" + this.model.exml_tip;


        this.exml_biaoTi.text = "备注：" + this.model.exml_biaoTi;
        this.exml_beiZhu.text = "" + this.model.exml_beiZhu;
        this.exml_yueDuCiShu.text = "阅读次数：" + this.model.exml_yueDuCiShu;
    }
}