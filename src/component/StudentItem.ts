class StudentItem extends eui.ItemRenderer {

	public exml_xueYuanBianHao: eui.Label;
	public exml_tip: eui.Button;
	public exml_icon: eui.Image;
	public exml_iconMask: eui.Rect;
	public exml_yongHuMing: eui.Label;
	public exml_zongJiaoFei: eui.Label;
	public exml_zuiHouXiaDan: eui.Label;
	public exml_zuiHouJiaoFei: eui.Label;
	public exml_xiangQingJiLu: eui.Button;

	private tipView: TipView;
	public type: number = null;

	private model: StudentItemData;
	public constructor() {
		super();
		this.skinName = "StudentItemSkin";
	}

	createChildren() {
		super.createChildren();
		this.exml_icon.mask = this.exml_iconMask;

		this.exml_tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipTouchHandler, this);
		this.exml_xiangQingJiLu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiangQingJiLuTouchHandler, this);
	}

	dataChanged() {
		super.dataChanged();

		this.model = this.data;

		if (this.getChildIndex(this.tipView) > -1) {
			this.removeChild(this.tipView);
		}
		this.exml_tip.label = "" + this.model.exml_tip;
		this.exml_icon.source = "" + this.model.exml_icon;
		this.exml_yongHuMing.text = "" + this.model.exml_yongHuMing;
		this.exml_xueYuanBianHao.text = "学员编号：" + this.model.exml_xueYuanBianHao;
		this.exml_zongJiaoFei.text = "总交费：￥" + this.model.exml_zongJiaoFei;
		this.exml_zuiHouXiaDan.text = "最后下单：" + this.model.exml_zuiHouXiaDan;
		this.exml_zuiHouJiaoFei.text = "最后交费：" + this.model.exml_zuiHouJiaoFei;

		if (this.model.exml_tip == "封禁") {
			(this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0x5cb85c;
			(this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0x5cb85c;
		} else if (this.model.exml_tip == "审核") {
			(this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0xf0ad4e;
			(this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0xf0ad4e;
		} else if (this.model.exml_tip == "解封") {
			(this.exml_tip["exml_bg"] as eui.Rect).fillColor = 0xd9534f;
			(this.exml_tip["exml_bg"] as eui.Rect).strokeColor = 0xd9534f;
		}
		(this.exml_tip["exml_bg"] as eui.Rect).strokeAlpha = 0.5;
	}

	private tipTouchHandler(e: egret.TouchEvent) {
		let serverInterface = null;
		let tipText = "";
		if (StudentEnabledPageController.type == 1) {
			serverInterface = Global.INTERFACE_TYPE.STUDENT_UPDATEINFO1;
			tipText = "审核成功";
		} else if (StudentEnabledPageController.type == 2) {
			serverInterface = Global.INTERFACE_TYPE.STUDENT_UPDATEINFO2;
			tipText = "封禁成功";
		} else if (StudentEnabledPageController.type == 3) {
			serverInterface = Global.INTERFACE_TYPE.STUDENT_UPDATEINFO2;
			tipText = "解封成功";
		}

		HttpManager.instance.sendMessage(serverInterface, { userId: this.model.exml_xueYuanBianHao }, (res) => {
			if (res.success == "0") {
				this.tipView = new TipView(tipText, ANIMATION_TYPE.SCALE_STAY, false, () => {
					egret.Tween.get(this).to({ height: 0 }, 500).wait(200).call(() => {
						LayerManager.instance.showPage(PagesIndex.STUDENT_ENABLED, StudentEnabledPageController.type);
					}, this);
				}, this, { X: this.width / 2, Y: this.height / 2 })
				this.addChild(this.tipView);
			}
		}, this, egret.HttpMethod.POST);
	}

	private xiangQingJiLuTouchHandler(e: egret.TouchEvent) {
		console.log("详情记录");
	}
}