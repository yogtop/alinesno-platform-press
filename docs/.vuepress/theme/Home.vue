<template>
  <div class="home">

    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero" />

      <h1>{{ title }}</h1>

      <p class="description">
        数字化转型的最佳平台，协助中小企业快速平台化、中台化、数字化
      </p>

      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </div>

    <section class="row td-box td-box--primary position-relative td-box--gradient td-box--height-auto">
      <div class="container text-center td-arrow-down">
        <span class="h4 mb-0">
          <h3>企业数字化转型赋能</h3>
          <p>云管理体系、研发过程的 DevOps 体系、微服务治理体系和大数据体系，中台架构能力，灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，
            进而形成企业的业务和数据中台，通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。</p>
        </span>
      </div>
    </section>

    <div class="features-box">
      <div v-if="featuresAll.length" class="features">
        <div
          v-for="(feature, index) in featuresAll"
          :key="index"
          class="feature"
        >
          <div class="title-icon">
            <img :src="$withBase('/svg/' + feature.icon)" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <!-- 案例说明_start -->
    <case-temp />
    <!-- 案例说明_end -->

    <div class="hero-section">
      <p class="title">加入讨论</p>
      <p class="description" style="width:80%;max-width:700px;margin:auto;">
        通过以下方式加入讨论，或为数字化建设添砖加瓦
      </p>
    </div>

    <div class="footer-section">
      <ul>
        <li>
          <p class="icon">
            <img :src="$withBase('/svg/dingtalk.svg')" />
          </p>
          <p class="label">开发交流群</p>
          <p class="tip">Java中台研发小组</p>
        </li>
        <li>
          <p class="icon">
            <img :src="$withBase('/svg/GitHub.svg')" />
          </p>
          <p class="label">欢迎参与贡献！</p>
          <p class="tip">在 GitHub 上协作。我们期待您的加入！</p>
        </li>
        <li>
          <p class="icon">
            <img :src="$withBase('/svg/wechat.svg')" />
          </p>
          <p class="label">请关注我们的公众号！</p>
          <p class="tip">我们会在第一时间分享新发布的特性和使用心得</p>
        </li>
      </ul>
    </div>

    <Content custom />

    <div v-if="data.footer" class="footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from '@default-theme/NavLink.vue'
import CaseTemp from './Case.vue'

import { isGitee } from './utils'

export default {
  components: { NavLink, CaseTemp },
  data() {
    return {
      title: '企业级数字化底座',
      saasTitle: '新狐云数字化平台',
      saasUrl: 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/',
      featuresAll: [
        {
          title: '企业级PaaS平台',
          details:
            '数字企业的研发效能引擎，功能覆盖了项目应用管理、代码仓库管理、敏捷项目协作管理、CI/CD、自动化测试以及运维监控。有效提高企业的管理、研发、运维和运营效率，助力企业快速、高效地响应需求变化，过程自动化流水。',
          icon: 'screen_check.svg'
        },
        {
          title: '微服务研发引擎',
          details:
            '一站式的微服务治理，包括服务注册与发现、配置管理、服务网关、APM、日志分析、智能运维等功能，致力于帮助企业快速构建高扩展、低成本、高性能的分布式系统的同时，通过立体式的监控运维体系，确保企业微服务安全、稳定运行。',
          icon: 'paper_plane_fill.svg'
        },
        {
          title: '企业级数据平台',
          details:
            '平台提供端到端的大数据平台能力，具备数据集成与开发、生产运维调度、离线与实时分析、数据质量治理与资产管理、数据共享与服务、数据应用搭建等全栈数据研发能力，助力企业缩短数据价值的萃取过程，快速指导经营实践',
          icon: 'screen_check.svg'
        },
        {
          title: '技术&研发中台',
          details:
            '统一工作台作为端点产品和方案的统一呈现平台，整合提供了包含账号、权限、日志、审批等十数种通用能力，快速响应各业务系统的接入和呈现。业务人员可以在同一个工作台内完成全域的工作任务，提高工作效率，同时统一的中后台交互体系也保证一致的用户体验。',
          icon: 'package.svg'
        },
        {
          title: 'SaaS业务中台',
          details:
            '应对企业间、系统间复杂的对接业务，研发体系为集成开发者提供了以集成流为核心的集成平台，可在线进行协议适配、数据结构构建、逻辑编排、数据映射等，使得业务的对接工作以低代码、可视化的形式完成。同时可将对接的过程沉淀、复用，以最大程度节省交付过程中的对接成本。',
          icon: 'Logosvg.svg'
        },
        {
          title: '企业容器云管理平台',
          details:
            '基于Kubernetes的容器云平台，解决开发、测试、运行环境统一、服务快速部署、运行期服务管理等调度问题。提供物理机、虚拟机、私有云、公有云统一接入的能力，屏蔽应用对基础设施层的依赖。让企业轻松实现资源灵活调度、跨云迁移、环境隔离和资产的运营分析。',
          icon: 'application_group.svg'
        }
      ]
    }
  },
  computed: {
    isCN() {
      // return this.$lang === 'zh-CN'
      return true
    },
    isGitee() {
      if (this.$isServer) return
      return isGitee()
    },
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    clickCoding(tag) {
      ga('send', 'click', 'e.coding', 'Action', tag)
    }
  }
}
</script>

<style lang="stylus">
@import '~@default-theme/styles/config.styl';

$accentColor = #005bd4;

.home {
  padding: $navbarHeight 0rem 0;
  max-width: 100%;
  margin: 0px auto;

  .hero {
    text-align: center;
    padding: 4rem 0px;

    >img {
      max-height: 230px;
      display: block;
      margin: 2rem auto 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 65rem;
      font-size: 1.25rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features-box {
    background-color: #f7fbfd;
    padding: 2rem 0px;
  }

  .features {
    padding: 1rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    text-align: center;
    background-color: #f7fbfd;
    max-width: 1200px;
    margin: auto;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    &:hover {
      cursor: pointer;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2rem;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

.footer-section {
  text-align: center;
  padding: 4rem 0px;
  background-color: #403f4c;
  float: left;
  width: 100%;
  margin-bottom: 50px;

  p {
    color: #fff;
    line-height: 0.9rem;
  }

  ul {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 0px;
  }

  li {
    float: left;
    width: 33%;
  }

  .icon {
    font-size: 1.8rem;
    line-height: 0.5rem;
    padding: 0px;
    margin: 10px;

    img {
      width: 45px;
    }
  }
}

.hero-section {
  text-align: center;
  padding: 3rem 0px;

  .title {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .description {
    font-size: 1.25rem;
    line-height: 1.3;
    color: #333;
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

.title-icon {
  font-size: 2.2rem;
  color: $accentColor;

  img {
    width: 45px;
  }
}

.td-box--primary {
    color: #fff;
    background-color: #2ba3de;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center!important;
    font-size: 1rem;
    font-weight: 400;

    .td-arrow-down{
      max-width: 1140px;
      margin: auto;
      font-size: 18px;
    }

    .td-box--primary:before {
        left: 50%;
        margin-left: -30px;
        bottom: -40px;
        border-style: solid;
        border-width: 25px 30px 0;
        border-color: #2ba3de transparent transparent transparent;
        z-index: 3;
        position: absolute;
        content: "";
    }

}

</style>
