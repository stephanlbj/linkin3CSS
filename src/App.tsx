import styles from './App.module.css'
import Header from './components/Header/Header'
import LeftContent from './components/LeftContent/LeftContent'
import NewPosts from './components/NewPosts/NewPosts'
import Posts from './components/Posts/Posts'
import RightContent from './components/RightContent/RightContent'

function App() {
 

  return (
     <>
      <Header/>
      <main className={styles.MainWrapper}>
      <LeftContent/>
      <div>
        <NewPosts/>
          <Posts userName="CSS Master" imageSrc='hero.png' description='Comprendre et maîtriser CSS (Cascading Style Sheets) et HTML  (Hypertext Markup Language) est crucial pour toute personne travaillant ou aspirant à travailler dans le domaine du développement web. Ces deux technologies constituent les fondations du web.'/>
          <Posts userName="Marc Jamison" imageSrc='typescript.png' description='TypeScript is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'/>
          <Posts userName="Graphql Community" imageSrc='graphql.png' description='GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.'/>
          <Posts userName="React World"  imageSrc='react.png' description='React 19 is now stable! 
Additions since this post was originally shared with the React 19 RC in April:

Pre-warming for suspended trees: see Improvements to Suspense.
React DOM static APIs: see New React DOM Static APIs.
The date for this post has been updated to reflect the stable release date.'/>
      </div>
      <RightContent/>
      </main>
     </>
  )
}

export default App
