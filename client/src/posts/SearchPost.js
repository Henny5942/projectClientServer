import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Search = ({setPosts,allPosts}) => {
  return (
    <div>
    <TextField onChange={(e)=>{setPosts(allPosts.filter(post=>post.title.includes(e.target.value)))}}
      placeholder="...חיפוש"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{margin:"20px 0"}}
    />
    </div>
  )
}

export default Search