HandleFill(){
	RGBA(255, 255, 255, 1)
} // End of HandleFill

TextPosition(){
	TextPosition.Right
} // End of TextPosition

FalseFill(){
	RGBA(255,255,255,0.15)
} // End of FalseFill

FalseHoverFill(){
	ColorFade(Self.FalseFill, 15%)
} // End of FalseHoverFill

TrueFill(){
	ColorValue("#6264A7")
} // End of TrueFill

TrueHoverFill(){
	ColorFade(Self.TrueFill, 15%)
} // End of TrueHoverFill

BorderColor(){
	RGBA(0, 0, 0, 0)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(56, 56, 56, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(Self.BorderColor, -15%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Self.BorderColor, 15%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Self.BorderColor
} // End of FocusedBorderColor

Height(){
	49
} // End of Height

Width(){
	154
} // End of Width

X(){
	40
} // End of X

Y(){
	778
} // End of Y

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

FontWeight(){
	FontWeight.Normal
} // End of FontWeight

Color(){
	White
} // End of Color

DisabledColor(){
	RGBA(186, 186, 186, 1)
} // End of DisabledColor

Font(){
	Font.'Open Sans'
} // End of Font

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

Size(){
	21
} // End of Size

