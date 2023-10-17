const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yaml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating HTML page for', slug)
}