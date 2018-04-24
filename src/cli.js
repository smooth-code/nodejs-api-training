import program from 'commander'
import axios from 'axios'
import chalk from 'chalk'
import ora from 'ora'

const handleError = error =>
  setTimeout(() => {
    throw error
  })

const loader = ora('Loading...')

program
  .command('articles:get')
  .description('Get all articles')
  .action(() => {
    loader.start()
    axios
      .get('http://localhost:3000/articles')
      .then(response => {
        loader.stop()
        console.log(chalk.blue(JSON.stringify(response.data, null, 2)))
      })
      .catch(handleError)
  })

program
  .command('articles:post')
  .description('Post a new article')
  .option('--title <title>', 'Title of the article')
  .option('--content <content>', 'Content of the article')
  .action(cmd => {
    loader.start()
    axios
      .post('http://localhost:3000/articles', {
        title: cmd.title,
        content: cmd.content,
      })
      .then(response => {
        loader.stop()
        console.log(chalk.green(`Article added (id: ${response.data.id})`))
      })
      .catch(handleError)
  })

program.parse(process.argv)
