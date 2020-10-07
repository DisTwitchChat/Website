import { DiscordContext } from "../../../../../contexts/DiscordContext";
import React, { useContext } from "react";
import { CommandContext } from "../../../../../contexts/CommandContext";

const CreateTextCommand = () => {
	const { setActivePlugins, userConnectedGuildInfo } = useContext(DiscordContext);
	const { response, setResponse } = useContext(CommandContext);
	return (
		<>
			<h4 className="plugin-section-title">Command Response</h4>
			<div className="plugin-section">
				<textarea
					placeholder="Hi, {user}!"
					value={response}
					onChange={e => setResponse(e.target.value)}
					rows="8"
					className="message"
				></textarea>
				<div className="variables">
					<h4 className="plugin-section-title">Available variables</h4>
					<ul>
						<li className="variable">{"{author} - The user who sent the command"}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default CreateTextCommand;