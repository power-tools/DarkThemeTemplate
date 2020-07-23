Layout(){
	Layout.Horizontal
} // End of Layout

ValueFill(){
	ColorValue("#6264A7")
} // End of ValueFill

RailFill(){
	RGBA(255,255,255,0.15)
} // End of RailFill

HandleFill(){
	RGBA(255, 255, 255, 1)
} // End of HandleFill

HandleHoverFill(){
	Self.HandleFill
} // End of HandleHoverFill

HandleActiveFill(){
	Self.HandleFill
} // End of HandleActiveFill

RailHoverFill(){
	ColorFade(Self.RailFill, 15%)
} // End of RailHoverFill

ValueHoverFill(){
	ColorFade(Self.ValueFill, 15%)
} // End of ValueHoverFill

BorderColor(){
	RGBA(0, 0, 0, 0)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(Self.BorderColor, -30%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Self.BorderColor, 30%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Self.BorderColor
} // End of FocusedBorderColor

X(){
	40
} // End of X

Y(){
	870
} // End of Y

Width(){
	560
} // End of Width

Height(){
	70
} // End of Height

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

