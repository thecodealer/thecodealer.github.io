<template>
    <Layout />
</template>

<script>
import Layout from './components/Layout.vue'

export default {
    name: 'App',
    components: {
        Layout
    }
}
</script>

<style lang="scss">
@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,300,700');
@import url('assets/vendor/bootstrap/css/bootstrap.min.css');
@import url('assets/vendor/font-awesome/css/font-awesome.min.css');
@import url('assets/css/styles.css');

html {
  -webkit-print-color-adjust: exact;
}

.timeline {
    .timeline-point {
        background-position-y: -200px;
    }

    &.education, &.work-experience {
        .content-wrap {
            .line-content {
                padding-bottom: 40px;
                ul {
                    margin-left: 20px;
                    color: #999;
                    li {
                        padding: 3px 0;
                    }
                }
            }
        }
    }
}

.stack-wrapper {
    margin-top: 20px;
    button {
        background: transparent;
        border: 1px solid #3b658a;
        color: #3b658a;
        margin: 5px 3px;
    }
}

.layout--pdf {
    background: none;
    padding: 0;
    .timeline-wrap {
        .timeline-bg {
            background-attachment: initial;
        }
        .timeline {
            .timeline-point {
                background-color: #249991;
            }
        }
    }
    #content-body {
        width: 100%;
        margin: 0;
        #content-body-inner {
            width: 100%;
            margin: 0;
            padding: 0;
        }
    }
}
</style>