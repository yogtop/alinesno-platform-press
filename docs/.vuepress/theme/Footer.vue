<template>
    <footer id="footer" class="footer-page">
        <div class="container">
            <div class="row footer-row">
                <div class="col-md-3">
                    <p class="footer-title">
                        关于我们
                    </p>
                    <p class="footer-text" style="text-indent: 24px;">
                        企业级数字化研发团队，专注南宁网站建设,南宁网站制作,
                        南宁网页设计,拥有10年南宁网站建设团队开发经验，
                        拥有5000余成功案例!，alinesno-platform是软件基础平台
                        与解决方案，致力面向企事业单位及软件开发商提供基于
                        JAVA的基础平台及解决方案。
                    </p>
                </div>
                <div class="col-md-3">
                    <p class="footer-title">
                        产品列表
                    </p>
                    <p class="footer-text-product" style="padding-top: 10px; margin-bottom: 0px;">
                        <a href="javascript:void(0);">
                            alinesno-cloud企业版
                        </a>
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; font-size: 10px; color: #64656b; font-weight: 300;">
                        更新日期：2020-02-17
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; margin-bottom: 0px;">
                        <a href="javascript:void(0);">
                            alinenso-cloud技术中台
                        </a>
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; font-size: 10px; color: #64656b; font-weight: 300;">
                        更新日期：2020-02-27
                    </p>
                    <p class="footer-text-product">
                        <a href="javascript:void(0);">
                            alinenso-boot 2.1.0
                        </a>
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; font-size: 10px; color: #64656b; font-weight: 300;">
                        更新日期：2019-02-17
                    </p>
                    <p class="footer-text-product">
                        <a href="javascript:void(0);">
                            alinenso-cat 2.1.0
                        </a>
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; font-size: 10px; color: #64656b; font-weight: 300;">
                        更新日期：2019-03-04
                    </p>
                    <p class="footer-text-product">
                        <a href="javascript:void(0);">
                            alinenso-generator 1.0
                        </a>
                    </p>
                    <p class="footer-text-product" style="padding-top: 0px; font-size: 10px; color: #64656b; font-weight: 300;">
                        更新日期：2018-11-21
                    </p>
                </div>
                <div class="col-md-3">
                    <p class="footer-title">
                        联系方式
                    </p>
                    <p class="footer-text-product" style="padding-top: 10px;">
                        <i class="iconfont icon-dianhua1">
                        </i>
                        0771-5581413
                    </p>
                    <!--<p class="footer-text-product"><i class="iconfont icon-dianhua1"></i> 18774035187</p>-->
                    <p class="footer-text-product">
                        <i class="iconfont icon-weizhi1">
                        </i>
                        南宁市江南区白沙大道38-6号天元国际1号楼1011
                    </p>
                    <p class="footer-title" style="margin-top: 40px;">
                        付款方式
                    </p>
                    <p class="footer-text-product" style="padding-top: 10px;">
                        <i class="iconfont icon-icon-alipay">
                        </i>
                        <a href="javascript:void(0);">
                            支付宝在线支付
                        </a>
                    </p>
                    <!--<p class="footer-text-product"><i class="iconfont icon-dianhua1"></i> 18774035187</p>-->
                    <p class="footer-text-product">
                        <i class="iconfont icon-duigongzhanghu">
                        </i>
                        <a href="javascript:void(0);">
                            企业账号汇款
                        </a>
                    </p>
                </div>
                <div class="col-md-3">
                    <p class="footer-title">
                        合作伙伴
                    </p>
                </div>
            </div>
            <div class="footer-copyright" style="font-size:13px;">
                版权所有 ©
                <strong id="copyrightYear">
                    {{ new Date().getFullYear() }}
                </strong>
                企业级数字化研发团队 
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">
                    桂ICP备15005934号-1
                </a>
            </div>
        </div>
    </footer>
</template>

<style lang="stylus" scoped>

.footer-page{
    float: left ;
    background: #eef1f6 none repeat center top;
    padding-bottom: 40px;
    width: 100%;

    .container {
        width: 95%;
        max-width: 1200px;
        margin: auto;

        .footer-row {
            background: #eef1f6 none repeat center top;
            padding-top: 80px;
            float: left;
            width: 100%;
        }

        .col-md-3 {
            width: 25%;
            float: left;
        }

        .footer-title {
            font-size: 18px;
            color: rgb(51, 51, 51);
            font-weight: bold;
        }

        .footer-text-product {
            color: rgb(51, 51, 51);
            font-size: 14px;
        }

        p {
            margin: 0 0 10px;
        }

        .footer-text {
            color: rgb(51, 51, 51);
            font-size: 14px;
            display: table-cell;
            line-height: 2.1em;
            padding-top: 10px;
            padding-right: 60px;
        }
    }

    .footer-copyright {
        text-align: center;
        color: #333333;
        float: left;
        width: 100%;
        margin-top: 20px;
    }

}

</style>
