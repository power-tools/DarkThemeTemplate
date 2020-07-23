Icon(){
	Icon.Home
} // End of Icon

Color(){
	RGBA(255,255,255,0.15)
} // End of Color

DisabledColor(){
	RGBA(244, 244, 244, 1)
} // End of DisabledColor

PressedColor(){
	ColorFade(Self.Color, -20%)
} // End of PressedColor

HoverColor(){
	ColorFade(Self.Color, 20%)
} // End of HoverColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	Self.Fill
} // End of DisabledFill

PressedFill(){
	Self.Fill
} // End of PressedFill

HoverFill(){
	Self.Fill
} // End of HoverFill

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

X(){
	12
} // End of X

Y(){
	4
} // End of Y

Width(){
	64
} // End of Width

Height(){
	64
} // End of Height

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(Self.BorderColor, -20%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(Self.BorderColor, 20%)
} // End of HoverBorderColor

FocusedBorderColor(){
	Self.BorderColor
} // End of FocusedBorderColor

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

OnSelect(){
	Navigate(Home)
} // End of OnSelect

