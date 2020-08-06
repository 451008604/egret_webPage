class StudentItem extends eui.ItemRenderer {
	public exml_xueYuanBianHao: eui.Label;
	public exml_tip: eui.Button;
	public exml_icon: eui.Image;
	public exml_iconMask: eui.Rect;
	public exml_yongHuMing: eui.Label;
	public exml_zongPaoLiang: eui.Label;
	public exml_zongJiaoFei: eui.Label;
	public exml_zuiHouXiaDan: eui.Label;
	public exml_zuiHouJiaoFei: eui.Label;
	public exml_beiZhu: eui.Label;
	public exml_jiaRuRiQi: eui.Label;
	public exml_xiangQingJiLu: eui.Button;

	private model: StudentItemData;
	public constructor() {
		super();
		this.skinName = "StudentItemSkin";
	}

	createChildren() {
		super.createChildren();
		this.exml_icon.mask = this.exml_iconMask;

		this.exml_xiangQingJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiangQingJiLuTouchHandler, this);
	}

	dataChanged() {
		super.dataChanged();

		this.model = this.data;

		this.exml_tip.label = "" + this.model.exml_tip;
		this.exml_icon.source = "" + this.model.exml_icon;
		this.exml_xueYuanBianHao.text = "" + this.model.exml_xueYuanBianHao;
		this.exml_yongHuMing.text = "" + this.model.exml_yongHuMing;
		this.exml_zongPaoLiang.text = "" + this.model.exml_zongPaoLiang;
		this.exml_zongJiaoFei.text = "" + this.model.exml_zongJiaoFei;
		this.exml_zuiHouXiaDan.text = "" + this.model.exml_zuiHouXiaDan;
		this.exml_zuiHouJiaoFei.text = "" + this.model.exml_zuiHouJiaoFei;
		this.exml_beiZhu.text = "" + this.model.exml_beiZhu;
		this.exml_jiaRuRiQi.text = "" + this.model.exml_jiaRuRiQi;

		if (this.model.exml_tip == "正常") {
			(this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0x13b505;
			(this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0x119b04;
		} else if (this.model.exml_tip == "异常") {
			(this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0xff9800;
			(this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0xa66300;
		}
	}

	private xiangQingJiLuTouchHandler(e: egret.TouchEvent) {
		console.log("详情记录");
	}
}
