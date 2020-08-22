class PayingItem extends eui.ItemRenderer {
    public exml_shiJian: eui.Label;
    public exml_tip: eui.Button;
    public exml_beiZhu: eui.Label;
    public exml_jiaoFeiJinE: eui.Label;

    private model: PayingItemData;
    constructor() {
        super();
        this.skinName = "PayingItemSkin";
    }

    dataChanged() {
        super.dataChanged();

        this.model = this.data;

        this.exml_shiJian.text = "" + this.model.exml_shiJian;
        this.exml_tip.label = "" + this.model.exml_tip;
        this.exml_beiZhu.text = "" + this.model.exml_beiZhu;
        this.exml_jiaoFeiJinE.text = "" + this.model.exml_jiaoFeiJinE;
    }
}