import fs from "fs";
import path from "path";

export function getAllPosts (){
    const postDir = path.join(process.cwd(), 'content/posts');
    const filenames = fs.readdirSync(postDir);

    const posts = filenames.map((name)=>{
        const fielPath = path.join(postDir, name);
        const fileContent = fs.readFileSync(fielPath, 'utf8');
        return JSON.parse(fileContent)
    });

    return posts;
}
