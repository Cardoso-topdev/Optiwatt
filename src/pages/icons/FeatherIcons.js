import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link as MuiLink,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import * as Icon from "react-feather";

const icons = {
  Activity: <Icon.Activity />,
  Airplay: <Icon.Airplay />,
  AlertCircle: <Icon.AlertCircle />,
  AlertOctagon: <Icon.AlertOctagon />,
  AlertTriangle: <Icon.AlertTriangle />,
  AlignCenter: <Icon.AlignCenter />,
  AlignJustify: <Icon.AlignJustify />,
  AlignLeft: <Icon.AlignLeft />,
  AlignRight: <Icon.AlignRight />,
  Anchor: <Icon.Anchor />,
  Aperture: <Icon.Aperture />,
  Archive: <Icon.Archive />,
  ArrowDownCircle: <Icon.ArrowDownCircle />,
  ArrowDownLeft: <Icon.ArrowDownLeft />,
  ArrowDownRight: <Icon.ArrowDownRight />,
  ArrowDown: <Icon.ArrowDown />,
  ArrowLeftCircle: <Icon.ArrowLeftCircle />,
  ArrowLeft: <Icon.ArrowLeft />,
  ArrowRightCircle: <Icon.ArrowRightCircle />,
  ArrowRight: <Icon.ArrowRight />,
  ArrowUpCircle: <Icon.ArrowUpCircle />,
  ArrowUpLeft: <Icon.ArrowUpLeft />,
  ArrowUpRight: <Icon.ArrowUpRight />,
  ArrowUp: <Icon.ArrowUp />,
  AtSign: <Icon.AtSign />,
  Award: <Icon.Award />,
  BarChart2: <Icon.BarChart2 />,
  BarChart: <Icon.BarChart />,
  BatteryCharging: <Icon.BatteryCharging />,
  Battery: <Icon.Battery />,
  BellOff: <Icon.BellOff />,
  Bell: <Icon.Bell />,
  Bluetooth: <Icon.Bluetooth />,
  Bold: <Icon.Bold />,
  BookOpen: <Icon.BookOpen />,
  Book: <Icon.Book />,
  Bookmark: <Icon.Bookmark />,
  Box: <Icon.Box />,
  Briefcase: <Icon.Briefcase />,
  Calendar: <Icon.Calendar />,
  CameraOff: <Icon.CameraOff />,
  Camera: <Icon.Camera />,
  Cast: <Icon.Cast />,
  CheckCircle: <Icon.CheckCircle />,
  CheckSquare: <Icon.CheckSquare />,
  Check: <Icon.Check />,
  ChevronDown: <Icon.ChevronDown />,
  ChevronLeft: <Icon.ChevronLeft />,
  ChevronRight: <Icon.ChevronRight />,
  ChevronUp: <Icon.ChevronUp />,
  ChevronsDown: <Icon.ChevronsDown />,
  ChevronsLeft: <Icon.ChevronsLeft />,
  ChevronsRight: <Icon.ChevronsRight />,
  ChevronsUp: <Icon.ChevronsUp />,
  Chrome: <Icon.Chrome />,
  Circle: <Icon.Circle />,
  Clipboard: <Icon.Clipboard />,
  Clock: <Icon.Clock />,
  CloudDrizzle: <Icon.CloudDrizzle />,
  CloudLightning: <Icon.CloudLightning />,
  CloudOff: <Icon.CloudOff />,
  CloudRain: <Icon.CloudRain />,
  CloudSnow: <Icon.CloudSnow />,
  Cloud: <Icon.Cloud />,
  Code: <Icon.Code />,
  Codepen: <Icon.Codepen />,
  Coffee: <Icon.Coffee />,
  Command: <Icon.Command />,
  Compass: <Icon.Compass />,
  Copy: <Icon.Copy />,
  CornerDownLeft: <Icon.CornerDownLeft />,
  CornerDownRight: <Icon.CornerDownRight />,
  CornerLeftDown: <Icon.CornerLeftDown />,
  CornerLeftUp: <Icon.CornerLeftUp />,
  CornerRightDown: <Icon.CornerRightDown />,
  CornerRightUp: <Icon.CornerRightUp />,
  CornerUpLeft: <Icon.CornerUpLeft />,
  CornerUpRight: <Icon.CornerUpRight />,
  Cpu: <Icon.Cpu />,
  CreditCard: <Icon.CreditCard />,
  Crop: <Icon.Crop />,
  Crosshair: <Icon.Crosshair />,
  Database: <Icon.Database />,
  Delete: <Icon.Delete />,
  Disc: <Icon.Disc />,
  DollarSign: <Icon.DollarSign />,
  DownloadCloud: <Icon.DownloadCloud />,
  Download: <Icon.Download />,
  Droplet: <Icon.Droplet />,
  Edit2: <Icon.Edit2 />,
  Edit3: <Icon.Edit3 />,
  Edit: <Icon.Edit />,
  ExternalLink: <Icon.ExternalLink />,
  EyeOff: <Icon.EyeOff />,
  Eye: <Icon.Eye />,
  Facebook: <Icon.Facebook />,
  FastForward: <Icon.FastForward />,
  Feather: <Icon.Feather />,
  FileMinus: <Icon.FileMinus />,
  FilePlus: <Icon.FilePlus />,
  FileText: <Icon.FileText />,
  File: <Icon.File />,
  Film: <Icon.Film />,
  Filter: <Icon.Filter />,
  Flag: <Icon.Flag />,
  FolderMinus: <Icon.FolderMinus />,
  FolderPlus: <Icon.FolderPlus />,
  Folder: <Icon.Folder />,
  Frown: <Icon.Frown />,
  Gift: <Icon.Gift />,
  GitBranch: <Icon.GitBranch />,
  GitCommit: <Icon.GitCommit />,
  GitMerge: <Icon.GitMerge />,
  GitPullRequest: <Icon.GitPullRequest />,
  GitHub: <Icon.GitHub />,
  Gitlab: <Icon.Gitlab />,
  Globe: <Icon.Globe />,
  Grid: <Icon.Grid />,
  HardDrive: <Icon.HardDrive />,
  Hash: <Icon.Hash />,
  Headphones: <Icon.Headphones />,
  Heart: <Icon.Heart />,
  HelpCircle: <Icon.HelpCircle />,
  Home: <Icon.Home />,
  Image: <Icon.Image />,
  Inbox: <Icon.Inbox />,
  Info: <Icon.Info />,
  Instagram: <Icon.Instagram />,
  Italic: <Icon.Italic />,
  Key: <Icon.Key />,
  Layers: <Icon.Layers />,
  Layout: <Icon.Layout />,
  LifeBuoy: <Icon.LifeBuoy />,
  Link2: <Icon.Link2 />,
  Link: <Icon.Link />,
  Linkedin: <Icon.Linkedin />,
  List: <Icon.List />,
  Loader: <Icon.Loader />,
  Lock: <Icon.Lock />,
  LogIn: <Icon.LogIn />,
  LogOut: <Icon.LogOut />,
  Mail: <Icon.Mail />,
  MapPin: <Icon.MapPin />,
  Map: <Icon.Map />,
  Maximize2: <Icon.Maximize2 />,
  Maximize: <Icon.Maximize />,
  Meh: <Icon.Meh />,
  Menu: <Icon.Menu />,
  MessageCircle: <Icon.MessageCircle />,
  MessageSquare: <Icon.MessageSquare />,
  MicOff: <Icon.MicOff />,
  Mic: <Icon.Mic />,
  Minimize2: <Icon.Minimize2 />,
  Minimize: <Icon.Minimize />,
  MinusCircle: <Icon.MinusCircle />,
  MinusSquare: <Icon.MinusSquare />,
  Minus: <Icon.Minus />,
  Monitor: <Icon.Monitor />,
  Moon: <Icon.Moon />,
  MoreHorizontal: <Icon.MoreHorizontal />,
  MoreVertical: <Icon.MoreVertical />,
  Move: <Icon.Move />,
  Music: <Icon.Music />,
  Navigation2: <Icon.Navigation2 />,
  Navigation: <Icon.Navigation />,
  Octagon: <Icon.Octagon />,
  Package: <Icon.Package />,
  Paperclip: <Icon.Paperclip />,
  PauseCircle: <Icon.PauseCircle />,
  Pause: <Icon.Pause />,
  Percent: <Icon.Percent />,
  PhoneCall: <Icon.PhoneCall />,
  PhoneForwarded: <Icon.PhoneForwarded />,
  PhoneIncoming: <Icon.PhoneIncoming />,
  PhoneMissed: <Icon.PhoneMissed />,
  PhoneOff: <Icon.PhoneOff />,
  PhoneOutgoing: <Icon.PhoneOutgoing />,
  Phone: <Icon.Phone />,
  PieChart: <Icon.PieChart />,
  PlayCircle: <Icon.PlayCircle />,
  Play: <Icon.Play />,
  PlusCircle: <Icon.PlusCircle />,
  PlusSquare: <Icon.PlusSquare />,
  Plus: <Icon.Plus />,
  Pocket: <Icon.Pocket />,
  Power: <Icon.Power />,
  Printer: <Icon.Printer />,
  Radio: <Icon.Radio />,
  RefreshCcw: <Icon.RefreshCcw />,
  RefreshCw: <Icon.RefreshCw />,
  Repeat: <Icon.Repeat />,
  Rewind: <Icon.Rewind />,
  RotateCcw: <Icon.RotateCcw />,
  RotateCw: <Icon.RotateCw />,
  Rss: <Icon.Rss />,
  Save: <Icon.Save />,
  Scissors: <Icon.Scissors />,
  Search: <Icon.Search />,
  Send: <Icon.Send />,
  Server: <Icon.Server />,
  Settings: <Icon.Settings />,
  Share2: <Icon.Share2 />,
  Share: <Icon.Share />,
  ShieldOff: <Icon.ShieldOff />,
  Shield: <Icon.Shield />,
  ShoppingBag: <Icon.ShoppingBag />,
  ShoppingCart: <Icon.ShoppingCart />,
  Shuffle: <Icon.Shuffle />,
  Sidebar: <Icon.Sidebar />,
  SkipBack: <Icon.SkipBack />,
  SkipForward: <Icon.SkipForward />,
  Slack: <Icon.Slack />,
  Slash: <Icon.Slash />,
  Sliders: <Icon.Sliders />,
  Smartphone: <Icon.Smartphone />,
  Smile: <Icon.Smile />,
  Speaker: <Icon.Speaker />,
  Square: <Icon.Square />,
  Star: <Icon.Star />,
  StopCircle: <Icon.StopCircle />,
  Sun: <Icon.Sun />,
  Sunrise: <Icon.Sunrise />,
  Sunset: <Icon.Sunset />,
  Tablet: <Icon.Tablet />,
  Tag: <Icon.Tag />,
  Target: <Icon.Target />,
  Terminal: <Icon.Terminal />,
  Thermometer: <Icon.Thermometer />,
  ThumbsDown: <Icon.ThumbsDown />,
  ThumbsUp: <Icon.ThumbsUp />,
  ToggleLeft: <Icon.ToggleLeft />,
  ToggleRight: <Icon.ToggleRight />,
  Trash2: <Icon.Trash2 />,
  Trash: <Icon.Trash />,
  Trello: <Icon.Trello />,
  TrendingDown: <Icon.TrendingDown />,
  TrendingUp: <Icon.TrendingUp />,
  Triangle: <Icon.Triangle />,
  Truck: <Icon.Truck />,
  Tv: <Icon.Tv />,
  Twitter: <Icon.Twitter />,
  Type: <Icon.Type />,
  Umbrella: <Icon.Umbrella />,
  Underline: <Icon.Underline />,
  Unlock: <Icon.Unlock />,
  UploadCloud: <Icon.UploadCloud />,
  Upload: <Icon.Upload />,
  UserCheck: <Icon.UserCheck />,
  UserMinus: <Icon.UserMinus />,
  UserPlus: <Icon.UserPlus />,
  UserX: <Icon.UserX />,
  User: <Icon.User />,
  Users: <Icon.Users />,
  VideoOff: <Icon.VideoOff />,
  Video: <Icon.Video />,
  Voicemail: <Icon.Voicemail />,
  Volume1: <Icon.Volume1 />,
  Volume2: <Icon.Volume2 />,
  VolumeX: <Icon.VolumeX />,
  Volume: <Icon.Volume />,
  Watch: <Icon.Watch />,
  WifiOff: <Icon.WifiOff />,
  Wifi: <Icon.Wifi />,
  Wind: <Icon.Wind />,
  XCircle: <Icon.XCircle />,
  XSquare: <Icon.XSquare />,
  X: <Icon.X />,
  Youtube: <Icon.Youtube />,
  ZapOff: <Icon.ZapOff />,
  Zap: <Icon.Zap />,
  ZoomIn: <Icon.ZoomIn />,
  ZoomOut: <Icon.ZoomOut />,
};

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const IconHolder = styled(Grid)`
  margin: 0.5rem 0;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  p {
    vertical-align: middle;
    display: flex;
  }

  svg {
    margin-right: 0.5rem;
    margin-top: -0.1rem;
  }
`;

function Icons() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Feather Icons
        </Typography>
        <Typography variant="body2" gutterBottom>
          Simply beautiful open source icons
        </Typography>
        <Paper mt={5}>
          <Grid container spacing={6}>
            {Object.keys(icons).map((key) => {
              return (
                <IconHolder key={key} item md={3}>
                  <Typography variant="body2">
                    {icons[key]} {key}
                  </Typography>
                </IconHolder>
              );
            })}
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
}

function FeatherIcons() {
  return (
    <React.Fragment>
      <Helmet title="Feather Icons" />
      <Typography variant="h3" gutterBottom display="inline">
        Feather Icons
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <MuiLink component={NavLink} exact to="/">
          Dashboard
        </MuiLink>
        <MuiLink component={NavLink} exact to="/">
          Icons
        </MuiLink>
        <Typography>Feather Icons</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Icons />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FeatherIcons;
