import avatar from "../../assets/avatar.jpeg";
import "animate.css";

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <div className="h-full carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full overflow-y-auto grid  grid-cols-2 max-sm:grid-cols-1 px-4">
        <div className="animate__animated animate__backInLeft flex justify-center text-center items-center text-4xl leading-relaxed font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent break-words">
          Hello，I am HeStudy。
          <br />
          你好，我是HeStudy。
          <br />
          <br />
          A front-end (full-stack) developer.
          <br />
          一位前端（全栈）开发工程师。
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="avatar"
            src={avatar}
            className="animate__fadeIn animate__animated w-[80%] h-auto rounded"
          />
        </div>
      </div>
      <div className="carousel-item h-full max-2xl:overflow-y-auto flex flex-col 2xl:justify-center items-center">
        <div className="text-4xl text-center leading-relaxed font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          My experience
          <br />
          我的经历
        </div>
        <div className="card container bg-neutral shadow-xl">
          <div className="card-body">
            <p>
              Since my first job after graduating from university, I have been
              involved in front-end development. Thanks to my experience
              participating in a big data competition in a work studio during
              college, I had a foundation in programming. While competing, I
              developed a strong interest in creating my own personal website,
              so I began self-studying front-end development and landed my first
              internship.
              <br />
              <span className="text-sm">
                从出大学起的第一份工作，我便与前端开发的工作有了联系，得益于在大学时参与工作室大数据竞赛的经历，使我有了编程的基础，竞赛之余，我对如何有一个自己的个人网站有着浓厚的兴趣，于是，我开始了自学前端开发，于是，也有了第一份的实习工作。
              </span>
              <br />
              <br />I have been working in front-end development since 2020, and
              have come a long way from static HTML to Vue projects, React,
              Angular projects, and even dabbling in Flutter and SwiftUI. <br />
              <span className="text-sm">
                我从2020年开始从事的前端开发工作，距今已过了好几个年头，也从当初的静态html，到vue项目，再到react,angular项目。甚至flutter，swiftui也有涉及。
              </span>
              <br />
              <br />
              From simple single-page applications to large-scale projects, from
              event pages to full-fledged website development, time has flown by
              and I have matured through these experiences.
              <br />
              <span className="text-sm">
                从最初的单页简单应用，到如今的巨石应用，从最初的活动页，到如今的项目落地，时过境迁，岁月的痕迹已不知不觉使人成熟。
              </span>
              <br />
              <br />
              During this time, I worked on smart city projects for government
              and enterprise clients, as well as projects for multinational
              companies such as intelligent cabinets and electric vehicles. I am
              also adept at handling internal enterprise CMS and ERP systems. I
              have experience with back-end SPAs, MPAs, micro-frontends, as well
              as SEO-driven websites with SSR/SSG architecture, and have
              successfully completed numerous projects.
              <br />
              <span className="text-sm">
                期间，我做过政企的智慧城市项目，也做过跨国企业的智能机柜，电动车等项目，当然，企业内部的cms,erp系统已是熟手。无论是后台的spa，mpa，微前端，还是需要seo的官网ssr,ssg架构，皆已落地不止一项。
              </span>
              <br />
              <br />
              As technology continues to evolve, I am still on the journey of
              learning and growing, with a steadfast determination to move
              forward.
              <br />
              <span className="text-sm">
                如今，科技在发展，我仍在路上，学无止境，坚定前行。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
