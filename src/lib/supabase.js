import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://akzqzeqlaqlyliugcptx.supabase.co/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrenF6ZXFsYXFseWxpdWdjcHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMzgyNDIsImV4cCI6MjAwMTkxNDI0Mn0.53_-WZ7uwCFD3gYXqDBQGHD2ShdqQpC_uIwnrnnttUI";

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase;