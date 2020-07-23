Fill(){
	ColorValue("#121212")
} // End of Fill

ImagePosition(){
	ImagePosition.Fit
} // End of ImagePosition

Height(){
	Max(App.Height, App.DesignHeight)
} // End of Height

Width(){
	Max(App.Width, App.DesignWidth)
} // End of Width

Size(){
	1 + CountRows(App.SizeBreakpoints) - CountIf(App.SizeBreakpoints, Value >= Self.Width)
} // End of Size

Orientation(){
	If(Self.Width < Self.Height, Layout.Vertical, Layout.Horizontal)
} // End of Orientation

LoadingSpinner(){
	LoadingSpinner.None
} // End of LoadingSpinner

LoadingSpinnerColor(){
	RGBA(56, 96, 178, 1)
} // End of LoadingSpinnerColor

