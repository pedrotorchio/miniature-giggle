<script>
import pages from '@/pages';
export default {
    data: () => ({
        pages
    }),
    computed: {
        pageIndex() {
            return this.pages.findIndex( page => page.slug === this.$route.name );
        },
        leftRoute() {
            const i = this.pageIndex - 1;
            
            return i >= 0 ? this.pages[i] : null;
        },
        rightRoute() {
            const i = this.pageIndex + 1;
            
            return i < this.pages.length ? this.pages[i] : null;
        }
    },
}
</script>
