const { __, _n, sprintf } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { TextControl, RadioControl, RangeControl, ToggleControl, ColorPalette } = wp.components;
const { serverSideRender: ServerSideRender } = wp;

registerBlockType(
	'simple-blog-card/simpleblogcard-block',
	{
		title: 'Simple Blog Card',
		icon: 'share-alt2',
		category: 'widgets',

		edit ( props ) {
			return [
			<Fragment>
				<ServerSideRender
					block = 'simple-blog-card/simpleblogcard-block'
					attributes = { props.attributes }
				/>
				<TextControl
					label = { 'URL' }
					value = { props.attributes.url }
					onChange = { ( value ) => props.setAttributes( { url: value } ) }
				/>

				<InspectorControls>
				{}
					<TextControl
						label = { 'URL' }
						value = { props.attributes.url }
						onChange = { ( value ) => props.setAttributes( { url: value } ) }
					/>
					<RangeControl
						label = { simpleblogcard_text.dessize }
						max = { 120 }
						min = { 0 }
						value = { props.attributes.dessize }
						onChange = { ( value ) => props.setAttributes( { dessize: value } ) }
					/>
					<RangeControl
						label = { simpleblogcard_text.imgsize }
						max = { 200 }
						min = { 0 }
						value = { props.attributes.imgsize }
						onChange = { ( value ) => props.setAttributes( { imgsize: value } ) }
					/>
					<ColorPalette
						label = { 'Color' }
						value = { props.attributes.color }
						type = { 'color' }
						onChange = { ( value ) => props.setAttributes( { color: value } ) }
					/>
					<TextControl
						label = { simpleblogcard_text.title }
						value = { props.attributes.title }
						onChange = { ( value ) => props.setAttributes( { title: value } ) }
					/>
					<TextControl
						label = { simpleblogcard_text.description }
						value = { props.attributes.description }
						onChange = { ( value ) => props.setAttributes( { description: value } ) }
					/>
					<ToggleControl
						label = { simpleblogcard_text.target_blank }
						checked = { props.attributes.target_blank }
						onChange = { ( value ) => props.setAttributes( { target_blank: value } ) }
					/>
				</InspectorControls>
			</Fragment>
			];
		},

		save () {
			return null;
		},

	}
);
