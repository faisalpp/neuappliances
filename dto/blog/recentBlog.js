class RecentBlogDTO{
    constructor(blog){
        this._id = blog._id;
        this.title = blog.title;
        this.slug = blog.slug;
        this.thumbnail = blog.thumbnail;
        this.createdAt = blog.createdAt;
    }
}

module.exports = RecentBlogDTO;