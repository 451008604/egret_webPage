class TipView extends eui.Component {
    public exml_text: eui.Label;

    private text: string = "";
    private type: ANIMATION_TYPE = null;
    private isRepetition: boolean = null;
    static isRepetition: boolean = true;
    private call = { callBack: null, thisObject: null };

    /**
     * 提示
     * @param _text 提示文字
     * @param _type 动画类型
     * @param _isRepetition 是否重复弹出（为false时  全局同一时间只能弹出一个弹框），默认为：true
     * @param _callBack 回调函数，默认为：null
     * @param _thisObject 回调作用域，默认为：null
     */
    constructor(_text: string, _type: number, _isRepetition: boolean = true, _callBack: Function = null, _thisObject: Object = null) {
        super();
        this.skinName = "TipViewSkin";

        this.text = _text;
        this.type = _type;
        this.isRepetition = _isRepetition;
        this.call.callBack = _callBack;
        this.call.thisObject = _thisObject;
    }

    childrenCreated() {
        super.childrenCreated();

        this.exml_text.text = this.text;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = Global.STAGE_WIDTH / 2;
        this.y = Global.STAGE_HEIGHT / 2;

        if (!TipView.isRepetition) {
            this.parent && this.parent.removeChild(this);
            return;
        }
        if (!this.isRepetition) {
            TipView.isRepetition = this.isRepetition;
        }
        switch (this.type) {
            case ANIMATION_TYPE.SCALE_STAY_UP:
                this.playAnimation1();
                break;
            case ANIMATION_TYPE.SCALE_STAY:
                this.playAnimation2();
                break;
        }
    }

    playAnimation1() {
        this.scaleY = 0;
        egret.Tween.get(this).to({ scaleY: 1 }, 50).wait(1500).to({ y: this.y - 500, alpha: 0 }, 500).call(() => {
            this.remove();
        }, this);
    }

    playAnimation2() {
        this.exml_text.textColor = 0xCC1313;
        this.scaleX = this.scaleY = 0;
        egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 50).wait(2000).call(() => {
            this.remove();
        }, this);
    }

    remove() {
        if (this.call.callBack && this.call.thisObject) {
            this.call.callBack.bind(this.call.thisObject);
            this.call.callBack();
        }
        TipView.isRepetition = true;
        this.parent && this.parent.removeChild(this);
    }
}