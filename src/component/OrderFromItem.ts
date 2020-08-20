class OrderFromItem extends eui.ItemRenderer {
    public exml_shiJian: eui.Label;
    public exml_tip: eui.Button;
    public exml_biaoTi: eui.Label;
    public exml_points: eui.Label;
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
        this.exml_points.visible = false;
        this.exml_biaoTi.text = "";
        this.exml_biaoTi.width = NaN;

        this.exml_shiJian.text = "" + this.model.exml_shiJian;
        this.exml_biaoTi.text = "" + this.model.exml_biaoTi;
        this.exml_beiZhu.text = "" + this.model.exml_beiZhu;

        if (Number(this.model.exml_tip) == 2) {
            (this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0x13b505;
            (this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0x119b04;
            this.exml_tip.label = "已完成";
            this.exml_yueDuCiShu.text = "阅读次数：10/10";
        } else if (Number(this.model.exml_tip) == 1) {
            (this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0xff9800;
            (this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0xa66300;
            this.exml_tip.label = "未完成";
            this.exml_yueDuCiShu.text = "阅读次数：0/10";
        }

        if (this.exml_biaoTi.width >= 620) {
            this.exml_biaoTi.width = 580;
            this.exml_biaoTi.width = this.exml_biaoTi.textWidth;
            this.exml_points.visible = true;
        }
    }
}