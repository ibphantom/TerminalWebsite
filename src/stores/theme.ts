<!-- TerminalWebsite/src/components/Ps1.svelte -->
<script>
  import ( theme ) from '../stores/theme';
  let hostname = window.location.hostname;

  // Destructure the username store from the theme store
  let { subscribe, set } = theme;
  let $username = ''; // Initialize $username with an empty string

  // Subscribe to the theme store and extract the username
  let unsubscribe = subscribe(value => {
    $username = value.username || ''; // Extract the username property from the theme
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
