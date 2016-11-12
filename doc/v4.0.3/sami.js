
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:RecAnalyst" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst.html">RecAnalyst</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:RecAnalyst_Analyzers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/Analyzers.html">Analyzers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RecAnalyst_Analyzers_Analyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/Analyzer.html">Analyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_BodyAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/BodyAnalyzer.html">BodyAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_HeaderAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/HeaderAnalyzer.html">HeaderAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_PlayerInfoBlockAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/PlayerInfoBlockAnalyzer.html">PlayerInfoBlockAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_PlayerMetaAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/PlayerMetaAnalyzer.html">PlayerMetaAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_PlayerObjectsListAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/PlayerObjectsListAnalyzer.html">PlayerObjectsListAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_PostgameDataAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/PostgameDataAnalyzer.html">PostgameDataAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_VersionAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/VersionAnalyzer.html">VersionAnalyzer</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Analyzers_VictorySettingsAnalyzer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Analyzers/VictorySettingsAnalyzer.html">VictorySettingsAnalyzer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RecAnalyst_Laravel" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/Laravel.html">Laravel</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RecAnalyst_Laravel_ServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Laravel/ServiceProvider.html">ServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RecAnalyst_Model" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/Model.html">Model</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RecAnalyst_Model_ChatMessage" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/ChatMessage.html">ChatMessage</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_GameInfo" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/GameInfo.html">GameInfo</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_GameSettings" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/GameSettings.html">GameSettings</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_InitialState" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/InitialState.html">InitialState</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Player" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Player.html">Player</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Research" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Research.html">Research</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Team" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Team.html">Team</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Tile" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Tile.html">Tile</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Tribute" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Tribute.html">Tribute</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Unit" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Unit.html">Unit</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_Version" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/Version.html">Version</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Model_VictorySettings" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Model/VictorySettings.html">VictorySettings</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RecAnalyst_Processors" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/Processors.html">Processors</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RecAnalyst_Processors_Achievements" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Processors/Achievements.html">Achievements</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Processors_MapImage" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/Processors/MapImage.html">MapImage</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RecAnalyst_ResourcePacks" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/ResourcePacks.html">ResourcePacks</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:RecAnalyst_ResourcePacks_AgeOfEmpires" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RecAnalyst/ResourcePacks/AgeOfEmpires.html">AgeOfEmpires</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RecAnalyst_ResourcePacks_AgeOfEmpires_Civilization" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html">Civilization</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_ResourcePacks_AgeOfEmpires_Colors" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html">Colors</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_ResourcePacks_AgeOfEmpires_Map" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html">Map</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_ResourcePacks_AgeOfEmpires_Unit" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/AgeOfEmpires/Unit.html">Unit</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:RecAnalyst_ResourcePacks_AgeOfEmpires" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/AgeOfEmpires.html">AgeOfEmpires</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_ResourcePacks_ResourcePack" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RecAnalyst/ResourcePacks/ResourcePack.html">ResourcePack</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:RecAnalyst_BasicTranslator" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="RecAnalyst/BasicTranslator.html">BasicTranslator</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_RecAnalystException" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="RecAnalyst/RecAnalystException.html">RecAnalystException</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_RecordedGame" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="RecAnalyst/RecordedGame.html">RecordedGame</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_StreamExtractor" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="RecAnalyst/StreamExtractor.html">StreamExtractor</a>                    </div>                </li>                            <li data-name="class:RecAnalyst_Utils" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="RecAnalyst/Utils.html">Utils</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "RecAnalyst.html", "name": "RecAnalyst", "doc": "Namespace RecAnalyst"},{"type": "Namespace", "link": "RecAnalyst/Analyzers.html", "name": "RecAnalyst\\Analyzers", "doc": "Namespace RecAnalyst\\Analyzers"},{"type": "Namespace", "link": "RecAnalyst/Laravel.html", "name": "RecAnalyst\\Laravel", "doc": "Namespace RecAnalyst\\Laravel"},{"type": "Namespace", "link": "RecAnalyst/Model.html", "name": "RecAnalyst\\Model", "doc": "Namespace RecAnalyst\\Model"},{"type": "Namespace", "link": "RecAnalyst/Processors.html", "name": "RecAnalyst\\Processors", "doc": "Namespace RecAnalyst\\Processors"},{"type": "Namespace", "link": "RecAnalyst/ResourcePacks.html", "name": "RecAnalyst\\ResourcePacks", "doc": "Namespace RecAnalyst\\ResourcePacks"},{"type": "Namespace", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "doc": "Namespace RecAnalyst\\ResourcePacks\\AgeOfEmpires"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/Analyzer.html", "name": "RecAnalyst\\Analyzers\\Analyzer", "doc": "&quot;Base class for analyzers.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Analyzers\\Analyzer", "fromLink": "RecAnalyst/Analyzers/Analyzer.html", "link": "RecAnalyst/Analyzers/Analyzer.html#method_analyze", "name": "RecAnalyst\\Analyzers\\Analyzer::analyze", "doc": "&quot;Run this analysis on a recorded game.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/BodyAnalyzer.html", "name": "RecAnalyst\\Analyzers\\BodyAnalyzer", "doc": "&quot;Analyzer for most things in a recorded game file body.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/HeaderAnalyzer.html", "name": "RecAnalyst\\Analyzers\\HeaderAnalyzer", "doc": "&quot;Analyzer for most things in a recorded game file header.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/PlayerInfoBlockAnalyzer.html", "name": "RecAnalyst\\Analyzers\\PlayerInfoBlockAnalyzer", "doc": "&quot;Analyze extended player information blocks. Should only be composed with the\nHeaderAnalyzer for now.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Analyzers\\PlayerInfoBlockAnalyzer", "fromLink": "RecAnalyst/Analyzers/PlayerInfoBlockAnalyzer.html", "link": "RecAnalyst/Analyzers/PlayerInfoBlockAnalyzer.html#method___construct", "name": "RecAnalyst\\Analyzers\\PlayerInfoBlockAnalyzer::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/PlayerMetaAnalyzer.html", "name": "RecAnalyst\\Analyzers\\PlayerMetaAnalyzer", "doc": "&quot;Analyze the small player metadata block. Can be composed or run\nindependently.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/PlayerObjectsListAnalyzer.html", "name": "RecAnalyst\\Analyzers\\PlayerObjectsListAnalyzer", "doc": "&quot;Reads a player objects list.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Analyzers\\PlayerObjectsListAnalyzer", "fromLink": "RecAnalyst/Analyzers/PlayerObjectsListAnalyzer.html", "link": "RecAnalyst/Analyzers/PlayerObjectsListAnalyzer.html#method___construct", "name": "RecAnalyst\\Analyzers\\PlayerObjectsListAnalyzer::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/PostgameDataAnalyzer.html", "name": "RecAnalyst\\Analyzers\\PostgameDataAnalyzer", "doc": "&quot;Analyze a UserPatch post-game data block, containing achievements.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/VersionAnalyzer.html", "name": "RecAnalyst\\Analyzers\\VersionAnalyzer", "doc": "&quot;Determine the game version that created the recorded game file.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Analyzers", "fromLink": "RecAnalyst/Analyzers.html", "link": "RecAnalyst/Analyzers/VictorySettingsAnalyzer.html", "name": "RecAnalyst\\Analyzers\\VictorySettingsAnalyzer", "doc": "&quot;Analyze an aoe2record game info header.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst", "fromLink": "RecAnalyst.html", "link": "RecAnalyst/BasicTranslator.html", "name": "RecAnalyst\\BasicTranslator", "doc": "&quot;Super tiny default translator for when RecAnalyst is used outside of Laravel.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\BasicTranslator", "fromLink": "RecAnalyst/BasicTranslator.html", "link": "RecAnalyst/BasicTranslator.html#method___construct", "name": "RecAnalyst\\BasicTranslator::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\BasicTranslator", "fromLink": "RecAnalyst/BasicTranslator.html", "link": "RecAnalyst/BasicTranslator.html#method_trans", "name": "RecAnalyst\\BasicTranslator::trans", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Laravel", "fromLink": "RecAnalyst/Laravel.html", "link": "RecAnalyst/Laravel/ServiceProvider.html", "name": "RecAnalyst\\Laravel\\ServiceProvider", "doc": "&quot;Service provider for use with Laravel.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Laravel\\ServiceProvider", "fromLink": "RecAnalyst/Laravel/ServiceProvider.html", "link": "RecAnalyst/Laravel/ServiceProvider.html#method_boot", "name": "RecAnalyst\\Laravel\\ServiceProvider::boot", "doc": "&quot;Configure translations and image resources.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/ChatMessage.html", "name": "RecAnalyst\\Model\\ChatMessage", "doc": "&quot;The ChatMessage class represents a single chat message sent before or during\nthe game.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\ChatMessage", "fromLink": "RecAnalyst/Model/ChatMessage.html", "link": "RecAnalyst/Model/ChatMessage.html#method___construct", "name": "RecAnalyst\\Model\\ChatMessage::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\ChatMessage", "fromLink": "RecAnalyst/Model/ChatMessage.html", "link": "RecAnalyst/Model/ChatMessage.html#method_create", "name": "RecAnalyst\\Model\\ChatMessage::create", "doc": "&quot;Helper method to create a chat message from a chat string more easily.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/GameInfo.html", "name": "RecAnalyst\\Model\\GameInfo", "doc": "&quot;GameInfo holds metadata about the analyzed game.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method___construct", "name": "RecAnalyst\\Model\\GameInfo::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_getPlayersString", "name": "RecAnalyst\\Model\\GameInfo::getPlayersString", "doc": "&quot;Returns the players string (1v1, FFA, etc.)&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_getPOV", "name": "RecAnalyst\\Model\\GameInfo::getPOV", "doc": "&quot;Returns the point of view.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_getPOVEx", "name": "RecAnalyst\\Model\\GameInfo::getPOVEx", "doc": "&quot;Returns extended point of view (including coop players).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_ingameCoop", "name": "RecAnalyst\\Model\\GameInfo::ingameCoop", "doc": "&quot;Determines if there is a cooping player in the game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_objectives", "name": "RecAnalyst\\Model\\GameInfo::objectives", "doc": "&quot;Returns the objectives string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameInfo", "fromLink": "RecAnalyst/Model/GameInfo.html", "link": "RecAnalyst/Model/GameInfo.html#method_scenarioFilename", "name": "RecAnalyst\\Model\\GameInfo::scenarioFilename", "doc": "&quot;Returns the Scenario file name.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/GameSettings.html", "name": "RecAnalyst\\Model\\GameSettings", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method___construct", "name": "RecAnalyst\\Model\\GameSettings::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_gameTypeName", "name": "RecAnalyst\\Model\\GameSettings::gameTypeName", "doc": "&quot;Returns game type string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_mapStyleName", "name": "RecAnalyst\\Model\\GameSettings::mapStyleName", "doc": "&quot;Returns map style string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_difficultyName", "name": "RecAnalyst\\Model\\GameSettings::difficultyName", "doc": "&quot;Returns difficulty level string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_gameSpeedName", "name": "RecAnalyst\\Model\\GameSettings::gameSpeedName", "doc": "&quot;Returns game speed string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_revealMapName", "name": "RecAnalyst\\Model\\GameSettings::revealMapName", "doc": "&quot;Returns reveal map string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_mapSizeName", "name": "RecAnalyst\\Model\\GameSettings::mapSizeName", "doc": "&quot;Returns map size string.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_getPopLimit", "name": "RecAnalyst\\Model\\GameSettings::getPopLimit", "doc": "&quot;Returns population limit.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_getLockDiplomacy", "name": "RecAnalyst\\Model\\GameSettings::getLockDiplomacy", "doc": "&quot;Returns whether diplomacy was locked.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_isScenario", "name": "RecAnalyst\\Model\\GameSettings::isScenario", "doc": "&quot;Returns true if game type is scenario, false otherwise.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_mapName", "name": "RecAnalyst\\Model\\GameSettings::mapName", "doc": "&quot;Get the map name.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_mapStyle", "name": "RecAnalyst\\Model\\GameSettings::mapStyle", "doc": "&quot;Get the map style for a map ID. Age of Empires categorises the builtin\nmaps into several styles in the Start Game menu, but that information\nis not stored in the recorded game file (after all, only the map itself\nis necessary to replay the game).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_isRealWorldMap", "name": "RecAnalyst\\Model\\GameSettings::isRealWorldMap", "doc": "&quot;Check whether the game was played on a \&quot;Real World\&quot; map, such as\nByzantinum or Texas.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_isCustomMap", "name": "RecAnalyst\\Model\\GameSettings::isCustomMap", "doc": "&quot;Check whether the game was played on a custom map.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\GameSettings", "fromLink": "RecAnalyst/Model/GameSettings.html", "link": "RecAnalyst/Model/GameSettings.html#method_isStandardMap", "name": "RecAnalyst\\Model\\GameSettings::isStandardMap", "doc": "&quot;Check whether the game was played on a builtin map.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/InitialState.html", "name": "RecAnalyst\\Model\\InitialState", "doc": "&quot;InitialState represents the initial state of a player, including resources\nand population.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Player.html", "name": "RecAnalyst\\Model\\Player", "doc": "&quot;The Player class represents a player in the game. This includes co-op players.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method___construct", "name": "RecAnalyst\\Model\\Player::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_isHuman", "name": "RecAnalyst\\Model\\Player::isHuman", "doc": "&quot;Returns whether the player is a human player.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_team", "name": "RecAnalyst\\Model\\Player::team", "doc": "&quot;Get the player&#039;s team.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_isCooping", "name": "RecAnalyst\\Model\\Player::isCooping", "doc": "&quot;Returns whether the player is co-oping.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_isSpectator", "name": "RecAnalyst\\Model\\Player::isSpectator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_color", "name": "RecAnalyst\\Model\\Player::color", "doc": "&quot;Get the hex color of this player.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_achievements", "name": "RecAnalyst\\Model\\Player::achievements", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_addResearch", "name": "RecAnalyst\\Model\\Player::addResearch", "doc": "&quot;Add a research action.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_researches", "name": "RecAnalyst\\Model\\Player::researches", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_civName", "name": "RecAnalyst\\Model\\Player::civName", "doc": "&quot;Get the name of this player&#039;s civilization.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_startingAge", "name": "RecAnalyst\\Model\\Player::startingAge", "doc": "&quot;Get the player&#039;s starting age.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Player", "fromLink": "RecAnalyst/Model/Player.html", "link": "RecAnalyst/Model/Player.html#method_position", "name": "RecAnalyst\\Model\\Player::position", "doc": "&quot;Get the player&#039;s starting position.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Research.html", "name": "RecAnalyst\\Model\\Research", "doc": "&quot;Represents a research action.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Research", "fromLink": "RecAnalyst/Model/Research.html", "link": "RecAnalyst/Model/Research.html#method___construct", "name": "RecAnalyst\\Model\\Research::__construct", "doc": "&quot;Create a research action.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Research", "fromLink": "RecAnalyst/Model/Research.html", "link": "RecAnalyst/Model/Research.html#method_name", "name": "RecAnalyst\\Model\\Research::name", "doc": "&quot;Get the localised research name.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Team.html", "name": "RecAnalyst\\Model\\Team", "doc": "&quot;Represents a Team of Players in the game.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Team", "fromLink": "RecAnalyst/Model/Team.html", "link": "RecAnalyst/Model/Team.html#method_addPlayer", "name": "RecAnalyst\\Model\\Team::addPlayer", "doc": "&quot;Adds a player to the team.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Team", "fromLink": "RecAnalyst/Model/Team.html", "link": "RecAnalyst/Model/Team.html#method_getPlayer", "name": "RecAnalyst\\Model\\Team::getPlayer", "doc": "&quot;Returns a player at the specified offset.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Team", "fromLink": "RecAnalyst/Model/Team.html", "link": "RecAnalyst/Model/Team.html#method_index", "name": "RecAnalyst\\Model\\Team::index", "doc": "&quot;Returns an index of the team.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Team", "fromLink": "RecAnalyst/Model/Team.html", "link": "RecAnalyst/Model/Team.html#method_players", "name": "RecAnalyst\\Model\\Team::players", "doc": "&quot;Get the players in this team.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Tile.html", "name": "RecAnalyst\\Model\\Tile", "doc": "&quot;Represents a map tile.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Tile", "fromLink": "RecAnalyst/Model/Tile.html", "link": "RecAnalyst/Model/Tile.html#method___construct", "name": "RecAnalyst\\Model\\Tile::__construct", "doc": "&quot;Create a terrain tile.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Tribute.html", "name": "RecAnalyst\\Model\\Tribute", "doc": "&quot;Represents a resource tribute.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Tribute", "fromLink": "RecAnalyst/Model/Tribute.html", "link": "RecAnalyst/Model/Tribute.html#method___construct", "name": "RecAnalyst\\Model\\Tribute::__construct", "doc": "&quot;Class constructor.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Unit.html", "name": "RecAnalyst\\Model\\Unit", "doc": "&quot;Unit represents a unit object in the game.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Unit", "fromLink": "RecAnalyst/Model/Unit.html", "link": "RecAnalyst/Model/Unit.html#method___construct", "name": "RecAnalyst\\Model\\Unit::__construct", "doc": "&quot;Create a new Unit.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Unit", "fromLink": "RecAnalyst/Model/Unit.html", "link": "RecAnalyst/Model/Unit.html#method_name", "name": "RecAnalyst\\Model\\Unit::name", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/Version.html", "name": "RecAnalyst\\Model\\Version", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\Version", "fromLink": "RecAnalyst/Model/Version.html", "link": "RecAnalyst/Model/Version.html#method___construct", "name": "RecAnalyst\\Model\\Version::__construct", "doc": "&quot;Create a new version data instance.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\Version", "fromLink": "RecAnalyst/Model/Version.html", "link": "RecAnalyst/Model/Version.html#method_name", "name": "RecAnalyst\\Model\\Version::name", "doc": "&quot;Get a localised version name.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Model", "fromLink": "RecAnalyst/Model.html", "link": "RecAnalyst/Model/VictorySettings.html", "name": "RecAnalyst\\Model\\VictorySettings", "doc": "&quot;Victory implements game&#039;s victory settings.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Model\\VictorySettings", "fromLink": "RecAnalyst/Model/VictorySettings.html", "link": "RecAnalyst/Model/VictorySettings.html#method___construct", "name": "RecAnalyst\\Model\\VictorySettings::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Model\\VictorySettings", "fromLink": "RecAnalyst/Model/VictorySettings.html", "link": "RecAnalyst/Model/VictorySettings.html#method_getVictoryString", "name": "RecAnalyst\\Model\\VictorySettings::getVictoryString", "doc": "&quot;Returns victory string.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Processors", "fromLink": "RecAnalyst/Processors.html", "link": "RecAnalyst/Processors/Achievements.html", "name": "RecAnalyst\\Processors\\Achievements", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Processors\\Achievements", "fromLink": "RecAnalyst/Processors/Achievements.html", "link": "RecAnalyst/Processors/Achievements.html#method___construct", "name": "RecAnalyst\\Processors\\Achievements::__construct", "doc": "&quot;Create an Achievements processor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Processors\\Achievements", "fromLink": "RecAnalyst/Processors/Achievements.html", "link": "RecAnalyst/Processors/Achievements.html#method_run", "name": "RecAnalyst\\Processors\\Achievements::run", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\Processors", "fromLink": "RecAnalyst/Processors.html", "link": "RecAnalyst/Processors/MapImage.html", "name": "RecAnalyst\\Processors\\MapImage", "doc": "&quot;Generate a top-down map image that shows the starting state of the game.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Processors\\MapImage", "fromLink": "RecAnalyst/Processors/MapImage.html", "link": "RecAnalyst/Processors/MapImage.html#method_defaultManager", "name": "RecAnalyst\\Processors\\MapImage::defaultManager", "doc": "&quot;Configure the Intervention image manager. See:&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Processors\\MapImage", "fromLink": "RecAnalyst/Processors/MapImage.html", "link": "RecAnalyst/Processors/MapImage.html#method___construct", "name": "RecAnalyst\\Processors\\MapImage::__construct", "doc": "&quot;Create a Map Image generator.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\Processors\\MapImage", "fromLink": "RecAnalyst/Processors/MapImage.html", "link": "RecAnalyst/Processors/MapImage.html#method_run", "name": "RecAnalyst\\Processors\\MapImage::run", "doc": "&quot;Generate a map!&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst", "fromLink": "RecAnalyst.html", "link": "RecAnalyst/RecAnalystException.html", "name": "RecAnalyst\\RecAnalystException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\RecAnalystException", "fromLink": "RecAnalyst/RecAnalystException.html", "link": "RecAnalyst/RecAnalystException.html#method___construct", "name": "RecAnalyst\\RecAnalystException::__construct", "doc": "&quot;Class constructor.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecAnalystException", "fromLink": "RecAnalyst/RecAnalystException.html", "link": "RecAnalyst/RecAnalystException.html#method___toString", "name": "RecAnalyst\\RecAnalystException::__toString", "doc": "&quot;String representation of the exception.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst", "fromLink": "RecAnalyst.html", "link": "RecAnalyst/RecordedGame.html", "name": "RecAnalyst\\RecordedGame", "doc": "&quot;Represents a recorded game file.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method___construct", "name": "RecAnalyst\\RecordedGame::__construct", "doc": "&quot;Create a recorded game analyser.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_getResourcePack", "name": "RecAnalyst\\RecordedGame::getResourcePack", "doc": "&quot;Get the current resource pack.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_runAnalyzer", "name": "RecAnalyst\\RecordedGame::runAnalyzer", "doc": "&quot;Run an analysis on the current game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_getAnalysis", "name": "RecAnalyst\\RecordedGame::getAnalysis", "doc": "&quot;Get an analysis result for a specific analyzer, running it if necessary.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_getHeaderContents", "name": "RecAnalyst\\RecordedGame::getHeaderContents", "doc": "&quot;Return the raw decompressed header contents.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_getBodyContents", "name": "RecAnalyst\\RecordedGame::getBodyContents", "doc": "&quot;Return the raw body contents.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_version", "name": "RecAnalyst\\RecordedGame::version", "doc": "&quot;Get the game version.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_header", "name": "RecAnalyst\\RecordedGame::header", "doc": "&quot;Get the result of analysis of the recorded game header.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_gameSettings", "name": "RecAnalyst\\RecordedGame::gameSettings", "doc": "&quot;Get the game settings used to play this recorded game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_victorySettings", "name": "RecAnalyst\\RecordedGame::victorySettings", "doc": "&quot;Get the victory settings for this game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_body", "name": "RecAnalyst\\RecordedGame::body", "doc": "&quot;Get the result of analysis of the recorded game body.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_mapImage", "name": "RecAnalyst\\RecordedGame::mapImage", "doc": "&quot;Render a map image.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_teams", "name": "RecAnalyst\\RecordedGame::teams", "doc": "&quot;Get the teams that played in this recorded game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_players", "name": "RecAnalyst\\RecordedGame::players", "doc": "&quot;Get the players that played in this recorded game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_pov", "name": "RecAnalyst\\RecordedGame::pov", "doc": "&quot;Get the POV player. This is the player that recorded this recorded game\nfile.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_achievements", "name": "RecAnalyst\\RecordedGame::achievements", "doc": "&quot;Get the player achievements.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_getTranslator", "name": "RecAnalyst\\RecordedGame::getTranslator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\RecordedGame", "fromLink": "RecAnalyst/RecordedGame.html", "link": "RecAnalyst/RecordedGame.html#method_trans", "name": "RecAnalyst\\RecordedGame::trans", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks", "fromLink": "RecAnalyst/ResourcePacks.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "doc": "&quot;Resource pack for Age of Empires 2 recorded games of all stripes (base game,\nexpansions, HD Edition, Userpatch, \u2026).&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_getCivName", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::getCivName", "doc": "&quot;Get the English name for a civilization.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isAoKCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isAoKCiv", "doc": "&quot;Checks if a civilization is included in the Age of Kings base game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isAoCCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isAoCCiv", "doc": "&quot;Checks if a civilization was added in the Age of Conquerors expansion.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isForgottenCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isForgottenCiv", "doc": "&quot;Checks if a civilization was added in the Forgotten Empires expansion.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isRealWorldMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isRealWorldMap", "doc": "&quot;Check whether a builtin map is a \&quot;Real World\&quot; map, such as Byzantinum or\nTexas.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isCustomMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isCustomMap", "doc": "&quot;Check whether a map ID denotes a custom map (i.e., not a builtin one).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isStandardMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isStandardMap", "doc": "&quot;Check whether a map ID denotes a builtin map.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isGateUnit", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isGateUnit", "doc": "&quot;Checks whether a unit type ID is a Gate unit.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isPalisadeGateUnit", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isPalisadeGateUnit", "doc": "&quot;Checks whether a unit type ID is a Palisade Gate unit.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isCliffUnit", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isCliffUnit", "doc": "&quot;Checks whether a unit type ID is a cliff. (Yes! Cliffs are units!)&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isGaiaObject", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isGaiaObject", "doc": "&quot;Checks whether a unit type ID is a GAIA object type. Used to determine\nwhich objects to draw on a map.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_isGaiaUnit", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::isGaiaUnit", "doc": "&quot;Checks whether a unit type ID is a GAIA unit. Used to determine which\nunits to draw on a map as not belonging to any player.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_normalizeUnit", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::normalizeUnit", "doc": "&quot;Normalize a unit type ID. Turns some groups of unit IDs (such as gates in\nfour directions) into a single unit ID, so it&#039;s easier to work with.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_getTerrainColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::getTerrainColor", "doc": "&quot;Get the color for a terrain type.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_getUnitColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::getUnitColor", "doc": "&quot;Get the color for a unit or object type, such as sheep or boar or\ncliffs(!).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires.html#method_getPlayerColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires::getPlayerColor", "doc": "&quot;Get the color for a player.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization", "doc": "&quot;Utilities for dealing with Age of Empires civilizations.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html#method_getCivName", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization::getCivName", "doc": "&quot;Get the in-game name of a civilization.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html#method_isAoKCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization::isAoKCiv", "doc": "&quot;Checks if a civilization is included in the Age of Kings base game.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html#method_isAoCCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization::isAoCCiv", "doc": "&quot;Checks if a civilization was added in the Age of Conquerors expansion.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Civilization.html#method_isForgottenCiv", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Civilization::isForgottenCiv", "doc": "&quot;Checks if a civilization was added in the Forgotten Empires expansion.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors", "doc": "&quot;Utilities for colors of things in Age of Empires.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html#method_getTerrainColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors::getTerrainColor", "doc": "&quot;Get the color for a terrain type.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html#method_getUnitColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors::getUnitColor", "doc": "&quot;Get the color for a unit or object type, such as sheep or boar or\ncliffs(!).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Colors.html#method_getPlayerColor", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Colors::getPlayerColor", "doc": "&quot;Get the color for a player.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map", "doc": "&quot;Some map constants.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html#method_isRealWorldMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map::isRealWorldMap", "doc": "&quot;Check whether a builtin map is a \&quot;Real World\&quot; map, such as Byzantinum or\nTexas.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html#method_isCustomMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map::isCustomMap", "doc": "&quot;Check whether a map ID denotes a custom map (i.e., not a builtin one).&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Map.html#method_isStandardMap", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Map::isStandardMap", "doc": "&quot;Check whether a map ID denotes a builtin map.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks\\AgeOfEmpires", "fromLink": "RecAnalyst/ResourcePacks/AgeOfEmpires.html", "link": "RecAnalyst/ResourcePacks/AgeOfEmpires/Unit.html", "name": "RecAnalyst\\ResourcePacks\\AgeOfEmpires\\Unit", "doc": "&quot;Age of Empires II unit IDs.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst\\ResourcePacks", "fromLink": "RecAnalyst/ResourcePacks.html", "link": "RecAnalyst/ResourcePacks/ResourcePack.html", "name": "RecAnalyst\\ResourcePacks\\ResourcePack", "doc": "&quot;Base class for resource packs. Doesn&#039;t do much currently.&quot;"},
                    
            {"type": "Class", "fromName": "RecAnalyst", "fromLink": "RecAnalyst.html", "link": "RecAnalyst/StreamExtractor.html", "name": "RecAnalyst\\StreamExtractor", "doc": "&quot;Extracts header and body parts from recorded game files.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\StreamExtractor", "fromLink": "RecAnalyst/StreamExtractor.html", "link": "RecAnalyst/StreamExtractor.html#method___construct", "name": "RecAnalyst\\StreamExtractor::__construct", "doc": "&quot;Create a stream extractor instance.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\StreamExtractor", "fromLink": "RecAnalyst/StreamExtractor.html", "link": "RecAnalyst/StreamExtractor.html#method_getHeader", "name": "RecAnalyst\\StreamExtractor::getHeader", "doc": "&quot;Read or return the Recorded Game file&#039;s header block.&quot;"},
                    {"type": "Method", "fromName": "RecAnalyst\\StreamExtractor", "fromLink": "RecAnalyst/StreamExtractor.html", "link": "RecAnalyst/StreamExtractor.html#method_getBody", "name": "RecAnalyst\\StreamExtractor::getBody", "doc": "&quot;Read or return the Recorded Game file&#039;s body.&quot;"},
            
            {"type": "Class", "fromName": "RecAnalyst", "fromLink": "RecAnalyst.html", "link": "RecAnalyst/Utils.html", "name": "RecAnalyst\\Utils", "doc": "&quot;Miscellaneous utilities for working with RecAnalyst.&quot;"},
                                                        {"type": "Method", "fromName": "RecAnalyst\\Utils", "fromLink": "RecAnalyst/Utils.html", "link": "RecAnalyst/Utils.html#method_formatGameTime", "name": "RecAnalyst\\Utils::formatGameTime", "doc": "&quot;Format a game time as \&quot;HH:MM:SS\&quot;.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


