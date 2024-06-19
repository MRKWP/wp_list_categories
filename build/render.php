<?php
/**
 * Render file for Dynamic Block
 *
 * @package           mrkwp/wp_list_categories
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php wp_list_categories( $attributes ); ?>
</div>
<?php
if ( $attributes['show_debug'] ) {
	do_action( 'qm/debug', $attributes );
}
