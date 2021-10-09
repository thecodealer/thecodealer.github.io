<template>
    <section class="timeline" :class="classes">
        <div class="line row timeline-margin">
            <div class="content-wrap">
                <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                <div class="col-md-9 bg1 full-height"></div>
            </div>
        </div>

        <div v-if="title" class="line row">
            <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            <div class="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
            <div class="col-md-8 content-wrap bg1">
                <h2 class="section-title">{{ title }}</h2>
            </div>
            <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
        </div>

        <template v-for="(item, itemIndex) in renderItems" :key="itemIndex">
            <div class="line row">
                <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                <div class="col-md-8 content-wrap bg1">
                    <div class="line-content">
                        <h3 class="section-item-title-1">{{ item.title }}</h3>
                        <template v-if="item.html">
                            <span v-html="item.html"></span>
                        </template>
                        <template v-else>
                            <p>{{ item.content }}</p>
                        </template>
                    </div>
                </div>
                <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>
        </template>
    </section>
</template>

<script>
export default {
    name: 'TimelineItem',
    props: {
        title: String,
        items: Array,
        class: String,
    },
    mounted() {
    },
    methods: {
        isList(content) {
            return Array.isArray(content)
        }
    },
    computed: {
        classes() {
            return [this.class]
        },
        renderItems() {
            return this.items || []
        }
    }
}
</script>