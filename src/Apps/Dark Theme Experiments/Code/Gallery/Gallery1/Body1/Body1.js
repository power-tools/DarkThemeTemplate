Live(){
	Live.Off
} // End of Live

Text(){
	ThisItem.SampleText
} // End of Text

Role(){
	TextRole.Default
} // End of Role

Overflow(){
	Overflow.Hidden
} // End of Overflow

Color(){
	RGBA(255, 255, 255, .15)
} // End of Color

DisabledColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledColor

PressedColor(){
	Self.Color
} // End of PressedColor

HoverColor(){
	Self.Color
} // End of HoverColor

BorderColor(){
	RGBA(0, 0, 0, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(56, 56, 56, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	Self.BorderColor
} // End of PressedBorderColor

HoverBorderColor(){
	Self.BorderColor
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Self.BorderColor
} // End of FocusedBorderColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	RGBA(0, 0, 0, 0)
} // End of DisabledFill

PressedFill(){
	Self.Fill
} // End of PressedFill

HoverFill(){
	Self.Fill
} // End of HoverFill

Font(){
	Font.'Segoe UI'
} // End of Font

FontWeight(){
	FontWeight.Normal
} // End of FontWeight

Align(){
	Align.Left
} // End of Align

VerticalAlign(){
	VerticalAlign.Top
} // End of VerticalAlign

X(){
	16
} // End of X

Y(){
	Image1.Y + Image1.Height + 16
} // End of Y

Width(){
	Parent.TemplateWidth - 32
} // End of Width

Height(){
	Self.Size * 4
} // End of Height

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

ZIndex(){
	AutoValue
} // End of ZIndex

PaddingTop(){
	0
} // End of PaddingTop

PaddingRight(){
	0
} // End of PaddingRight

PaddingBottom(){
	0
} // End of PaddingBottom

PaddingLeft(){
	0
} // End of PaddingLeft

TabIndex(){
	-1
} // End of TabIndex

AutoHeight(){
	true
} // End of AutoHeight

Size(){
	16
} // End of Size

OnSelect(){
	Select(Parent)
} // End of OnSelect

