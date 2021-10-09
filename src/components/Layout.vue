<template>
    <section id="content-body" class="container animated">
        <div class="row" id="intro">
            <div id="content-body-inner" class="col-md-10 col-md-offset-1">
                <div class="row" id="inner-content">
                    <div class="col-md-12 clearfix top-colors">
                        <div class="top-color top-color1"></div>
                        <div class="top-color top-color2"></div>
                        <div class="top-color top-color3"></div>
                        <div class="top-color top-color1"></div>
                        <div class="top-color top-color2"></div>
                    </div>
                    
                    <div class="col-md-12 resume-container">
                        <template v-if="$layout == 'default'">
                            <div class="row">
                                <div class="header-buttons col-md-10 col-md-offset-1">
                                    <a href="resume.pdf" target="_blank" class="btn btn-default btn-top-resume"><i class="fa fa-download"></i><span class="btn-hide-text">Download my resume</span></a>
                                    <a :href="'mailto:' + email" target="_blank" class="btn btn-default btn-top-message"><i class="fa fa-envelope-o"></i><span class="btn-hide-text">Send me a message</span></a>
                                </div>
                            </div>
                        </template>

                        <Intro />

                        <div class="timeline-wrap">
                            <div class="timeline-bg">
                                <Profile />
                                <Education />
                                <Experience />
                            </div>
                        </div>

                        <footer id="footer" class="row"></footer>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>

<script>
import Intro from './Intro'
import Profile from './Profile'
import Education from  './Education'
import Experience from './Experience'

export default {
    name: 'Layout',
    inject: ['$layout', '$config'],
    components: {
        Intro,
        Profile,
        Education,
        Experience,
    },
    mounted() {
        document.querySelector('body').classList.add('layout--' + this.$layout)
        setTimeout(() => {
            this.fixFullHeight()
        }, 100)
    },
    methods: {
        fixFullHeight() {
            const items = this.$el.querySelectorAll('.full-height')
            if (items.length > 0) {
                items.forEach((item) => {
                    const wrap = item.closest('.line').querySelector('.content-wrap')
                    const wrapBox = wrap.getBoundingClientRect()
                    item.style.height = wrapBox.height + 'px'
                })
            }
        }
    },
    computed: {
        email() {
            return this.$config.profile && this.$config.profile.email ? this.$config.profile.email : null;
        }
    }
}
</script>