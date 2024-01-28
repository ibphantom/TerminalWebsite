// TerminalWebsite/src/components/Ps1.svelte
<script>
  import { theme, username } from '../stores/theme';
  let hostname = window.location.hostname;

  // Subscribe to the username store
  let unsubscribe = username.subscribe(value => {
    $username = value;
    console.log('Username updated:', value);
  });

  // Make sure to unsubscribe when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });
</script>

<h1 class="font-bold flex">
  <span style={`color: ${$theme.yellow};`}>{$username}</span>
  <span style={`color: ${$theme.white}`}>@</span>
  <span style={`color: ${$theme.green}`}>{hostname}</span>
  <span style={`color: ${$theme.white}`}>~$</span>
</h1>
