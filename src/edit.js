/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import {
    TextControl,
    PanelBody,
    PanelRow,
    ToggleControl,
    SelectControl
} from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Fragment, useState } from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

    const taxonomies = wp.data.select('core').getTaxonomies();

    const taxonomy_options = taxonomies?.map( taxonomy => ( {
        label: `${ taxonomy.name } (${ taxonomy.slug })`,
        value: taxonomy.slug,
    } ) );

    const {
        taxonomy,
        depth,
        title_li,
        show_count,
        use_desc_for_title,
        hide_title_if_empty,
        show_debug
    } = attributes;

	return (
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={__('Category List Settings', 'mrk-wp-list-categories')}
                    initialOpen={true}
                >
                    <PanelRow>
                        <fieldset>
                            <SelectControl
                                label={__('Taxonomy', 'mrk-wp-list-categories')}
                                value={ taxonomy }
                                options={ taxonomy_options }
                                onChange={ value => setAttributes( { taxonomy: value } ) }
                                __nextHasNoMarginBottom
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <TextControl
                                label={__('Depth of list', 'mrk-wp-list-categories')}
                                value={depth}
                                onChange={ ( depth ) => setAttributes( { depth } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <TextControl
                                label={__('Title Li', 'mrk-wp-list-categories')}
                                value={title_li}
                                onChange={ ( title_li ) => setAttributes( { title_li } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Show Post Count', 'mrk-wp-list-categories')}
                                checked={show_count}
                                onChange={ () => setAttributes( { show_count: !show_count } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Show Desc for Title', 'mrk-wp-list-categories')}
                                checked={use_desc_for_title}
                                onChange={ () => setAttributes( { use_desc_for_title: !use_desc_for_title } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Hide title if Empty', 'mrk-wp-list-categories')}
                                checked={hide_title_if_empty}
                                onChange={ () => setAttributes( { hide_title_if_empty: !hide_title_if_empty } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Show Debug in QM', 'mrk-wp-list-categories')}
                                checked={show_debug}
                                onChange={ () => setAttributes( { show_debug: !show_debug } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <p { ...useBlockProps() }>
                { __(
                    'WP List Category Block',
                    'mrk-wp-list-categories'
                ) }
            </p>
        </Fragment>
	);
}