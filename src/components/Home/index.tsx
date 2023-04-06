import avatar from "../../assets/avatar.jpeg";
import front from "../../assets/front.jpeg";

interface HomeProps {}

export function Home({}: HomeProps) {
  return (
    <div className="h-full carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full grid  grid-cols-2 max-sm:grid-cols-1">
        <div className="flex justify-center text-center items-center text-4xl leading-relaxed font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
          Hello，I am HeStudy。
          <br />
          你好，我是HeStudy。
        </div>
        <div className="flex items-center justify-center">
          <img alt="avatar" src={avatar} className="w-[80%] h-auto rounded" />
        </div>
      </div>
      <div className="carousel-item h-full overflow-y-auto grid gap-10 grid-cols-2 max-sm:grid-cols-1">
        <div className="flex text-center justify-center items-center text-4xl leading-relaxed font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Who am I?
          <br />
          我是谁？
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="card w-96 bg-neutral shadow-xl">
            <figure>
              <img src={front} alt="front" className="h-auto w-96" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Front-end (Full-stack) Developer
                <br /> 前端(全栈)开发工程师
              </h2>
              <p>
                I am a front-end (full-stack) developer, proficient in React,
                Vue, Angular, Astro and other front-end frameworks, as well as
                back-end languages such as Node, Python and Golang. I can use
                these technologies to develop high-performance, highly available
                and scalable web applications that meet users' various needs and
                experiences. I have a strong interest and passion for front-end
                development, enjoy learning and exploring new technologies and
                trends, constantly improving my skills and level. <br />
                <br /> 我是一名前端（全栈）开发工程师，熟练掌握React, Vue,
                Angular, Astro等前端框架，以及Node, Python,
                Golang等后端语言。我能够使用这些技术开发高性能，高可用，高可扩展的Web应用程序，满足用户的各种需求和体验。我对前端开发有着浓厚的兴趣和热情，喜欢学习和探索新的技术和趋势，不断提升自己的技能和水平。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
