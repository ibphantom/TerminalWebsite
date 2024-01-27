<script>
  import { theme, username } from '../stores/theme';
  let hostname = window.location.hostname;
</script>

<h1 class="font-bold flex">
  <span style={`color: ${$theme.yellow};`}>{$username}</span>
  <span style={`color: ${$theme.white}`}>@</span>
  <span style={`color: ${$theme.green}`}>{hostname}</span>
  <span style={`color: ${$theme.white}`}>~$</span>
</h1>
