# Rext Landing Page

This is the landing page for the work in progress framework, Rext.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

# Info - What is this?

Rext is a Rust-powered, batteries included, opinionated web framework for building full stack web applications.

The goal of Rext is to be the *Next.js* underdog of building Rust-based web apps, with a Ruby On Rails style approach.

It will be a true full stack framework, meant to be deployed as a self-hosted web app on a server or other cloud infrastructure. It's not meant to be a 'serverless' framework that relies on edge functions. The backend will be powered by Rust and the Rust web framework Axum. This makes it fast with a small footprint and stable.

Developer tooling is the key to making Rext special. The current Rust web-app ecosystem is disjointed. You have to fuse together several crates and front-end technologies to get a modern development experience, and there's a lot to learn, especially for those new to Rust. Rext hopes to create a unified experience that feels like working in a single technology in a single repository, not multiple disjointed projects.

# Planned Features

Rext has a gameplan, but it's not ready for the public eye yet. Here are some key features planned for the initial release:

## TUI for full project management

Initialize your project, choose a front-end framework (or no framework at all and use HTML templates), add API routes, page routes, different kinds of components and functionality, database models, perform migrations. Everything you'd expect from a framework designed to handle infrastructure and configuration for you, so you can focus on what really matters- the business logic that makes your app unique.

## Batteries Included

Everything you need to build a full stack web application, pre-configured out of the box.
- Authentication
- Database
- Caching
- Background tasks
- Easy Deployment tools
- Payments for SaaS apps

## Dedicated Deployment Pipelines

Picking a platform or figuring out how to deploy the killer web app you just built is always a hassle. Even experienced programmers can feel out of their depth when it comes to complicated DevOps platforms. Rext aims to offer an easy deployment solution for dedicated platforms, such as self-hosted servers or cloud providers.

The goal is to make deployment as simple as providing some key details and using the TUI to deploy the app, though implementation specifics are still being refined.

## Performance

It wouldn't be a Rust project if we didn't mention Rust's high performance. This should give you the confidence that your apps will run smoothly with very few resources, even under high traffic. Benchmarks will be a priority once Rext enters Beta phases.

## Development Velocity

More than anything, Rext aims to take a week of planning and setup off of the average Rust developer's plate so they can jump right in. No need to configure auth, payments, or databases. Lean into the pre-configured, opinionated defaults and your project should soar in no time.

Rext can be configured however you want it, it's your app! But fighting the defaults will waste more time than you saved. Keep it simple, even if you don't agree 100% (*You used THIS database? Ridiculous!*).

## Documentation and guides out the wazoo!

Comprehensive documentation and tutorials are a core priority. The goal is not just to share a framework to speed up project development, but to teach developers as much as possible along the way.

Rext aims to be an inviting framework for beginners and experts alike, with extensive guides and community support. The framework's success depends on building a supportive community that shares this vision.

# Shout out to the trailblazer

[Loco.rs](https://loco.rs) released a powerful, open-source framework that deserves recognition as a pioneer in this space. In the initial research and planning stages of Rext, careful consideration was given to ensure we weren't re-inventing existing solutions. Truth be told, there is overlap. The hope is that Rext and Loco will complement each other well, just like countless JavaScript frameworks out there do (Next.js, Nuxt, Sveltekit, all living in harmony).

There will be a stark difference between Loco and Rext. While Rext does take some inspiration from Ruby on Rails, it doesn't aim to be a re-implementation of it in Rust. Like Ruby on Rails, Rext will have strong opinionated defaults and an architecture designed specifically for Rust-based web development. The framework's architecture is being designed to feel natural for Rust developers while providing the developer experience that modern web development demands.

So thank you to Loco.rs for being, as far as we know, the first full stack, end-to-end Rust framework for building Rust web apps, at the speed of Rust.